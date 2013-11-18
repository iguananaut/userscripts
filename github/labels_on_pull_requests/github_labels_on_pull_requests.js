// ==UserScript==
// @name        GitHub Labels on Pull Requests
// @namespace   https://github.com/iguananaut/userscripts
// @description Adds label management to GitHub pull request pages just like normal issues
// @include     http*://github.com/*/*/pull/*
// @version     1
// @grant       GM_xmlhttpRequest
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js
// @require     http://builds.handlebarsjs.com.s3.amazonaws.com/handlebars-v1.1.2.js
// ==/UserScript==

var ghDiscussionLabelsTemplateSource = [
  '<div class="discussion-labels">',
    '<div class="label-manager">',
      '<strong>Labels</strong>',
      '<div class="select-menu label-select-menu js-issue-show-label-select-menu js-menu-container js-select-menu" data-url="{{dataUrl}}" data-multiple="">',
        '<span class="minibutton icon-only select-menu-button js-menu-target"><span class="octicon octicon-gear"></span></span>',
        '<form accept-charset="UTF-8" action="{{dataUrl}}" method="post"><div style="margin:0;padding:0;display:inline">',
          '<input name="_method" value="put" type="hidden">',
          '<input name="authenticity_token" value="{{csrf_token}}" type="hidden"></div>',
          '<div class="select-menu-modal-holder js-menu-content js-navigation-container">',
            '<div class="select-menu-modal">',
              '<div class="select-menu-header">',
                '<span class="select-menu-title">Apply labels to this issue</span>',
                '<span class="octicon octicon-remove-close js-menu-close"></span>',
              '</div>',
              '<div class="select-menu-error-shell"><span class="select-menu-error js-select-menu-error">Whoops, there was an error</span></div>',
              '<div class="select-menu-filters">',
                '<div class="select-menu-text-filter"><input id="label-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter labels" autocomplete="off" type="text"></div>',
              '</div>',
              '<div class="select-menu-list" data-filterable-for="label-filter-field" data-filterable-type="substring">',
              '{{#each labels}}',
              '{{#if @index}}<div class="select-menu-item js-navigation-item labelstyle-{{this.color}}">',
              '{{else}}<div class="select-menu-item js-navigation-item labelstyle-{{this.color}}" selected>{{/if}}',
                '<span class="select-menu-item-icon octicon octicon-check"></span>',
                '<div class="select-menu-item-text">',
                  '<div class="color-label-wrapper">',
                    '<div data-name="{{this.name}}" class="color-label labelstyle-{{this.color}}">',
                    '<input style="display: none" value="{{this.name}}" name="labels[]" checked="checked" type="checkbox">',
                    '<span class="color" style="background-color: #{{this.color}}">&nbsp;</span>',
                    '<span class="name">{{this.name}}</span>',
                    '<span class="octicon octicon-remove-close"></span></div></div></div></div>',
              '{{/each}}</div>',
              '<div class="select-menu-no-results js-not-filterable">Nothing to show</div>',
              '<div class="select-menu-loading-overlay">Loading…</div>',
            '</div> <!-- /.select-menu-modal --></div>',
            '<input class="js-issue-number" name="issues[]" value="{{issue}}" type="hidden"></form></div></div>',
    '<ul class="color-label-list filter-list small">',
    '{{#each issueLabels}}',
    '<li><span class="filter-item color-label labelstyle-{{this.color}}" title="{{this.name}}">{{this.name}}</span></li>',
    '{{/each}}</ul></div>'
].join("");

var ghDiscussionLabelsTemplate = Handlebars.compile(ghDiscussionLabelsTemplateSource);

var ghUrlParts = document.URL.match("^https://github.com/([a-zA-Z0-9_-]+)/([a-zA-Z0-9_-]+)/pull/([0-9]+)");
var ghRepoUser = ghUrlParts[1];
var ghRepoName = ghUrlParts[2];
var ghPRNumber = ghUrlParts[3];


var ghCSRFToken = $("meta[name=csrf-token]").attr("content");

var ghRepoUrlBase = "https://api.github.com/repos/" + ghRepoUser + "/" + ghRepoName;
var ghIssuePostUrl = "/" + ghRepoUser + "/" + ghRepoName + "/issues/labels/modify_assignment";

var ghRepoLabels;
var ghIssueLabels;

ghRepoLabels = ghIssueLabels = [{name: "foo", color: "000000"}];

// TODO: Make this less bad...
function ghAppendDiscussionLabels() {
  if (ghRepoLabels === undefined || ghIssueLabels == undefined) {
    return;
  }
  
  var context = {labels: ghRepoLabels, issueLabels: ghIssueLabels, dataUrl: ghIssuePostUrl,
               issue: ghPRNumber, csrf_token: ghCSRFToken};

  $("div.discussion-sidebar").append("<hr></hr>").append(ghDiscussionLabelsTemplate(context));
}

GM_xmlhttpRequest({
  method: "GET",
  url: ghRepoUrlBase + "/labels",
  headers: {"Accept": "application/json"},
  onload: function(response) {
    // TODO: Error handling
    ghRepoLabels = JSON.parse(response.responseText);
    ghAppendDiscussionLabels();
  }
});

GM_xmlhttpRequest({
  method: "GET",
  url: ghRepoUrlBase + "/issues/" + ghPRNumber + "/labels",
  headers: {"Accept": "text/json"},
  onload: function(response) {
    // TODO: Error handling
    ghIssueLabels = JSON.parse(response.responseText);
    ghAppendDiscussionLabels();
  }
});
