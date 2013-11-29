(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['label_manager'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n                            ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.selected), {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                                <span class=\"select-menu-item-icon octicon octicon-check\"></span>\n                                <div class=\"select-menu-item-text\">\n                                    <div class=\"color-label-wrapper\">\n                                        <div data-name=\""
    + escapeExpression(((stack1 = (depth0 && depth0.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"color-label labelstyle-"
    + escapeExpression(((stack1 = (depth0 && depth0.color)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n                                            ";
  stack2 = helpers['if'].call(depth0, (depth0 && depth0.selected), {hash:{},inverse:self.program(8, program8, data),fn:self.program(6, program6, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n                                            <span class=\"color\" style=\"background-color: #"
    + escapeExpression(((stack1 = (depth0 && depth0.color)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">&nbsp;</span>\n                                            <span class=\"name\">"
    + escapeExpression(((stack1 = (depth0 && depth0.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\n                                            <span class=\"octicon octicon-remove-close\"></span>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                            <div class=\"select-menu-item js-navigation-item labelstyle-"
    + escapeExpression(((stack1 = (depth0 && depth0.color)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " selected\">\n                            ";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                            <div class=\"select-menu-item js-navigation-item labelstyle-"
    + escapeExpression(((stack1 = (depth0 && depth0.color)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n                            ";
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                                            <input style=\"display: none\" value=\""
    + escapeExpression(((stack1 = (depth0 && depth0.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" name=\"labels[]\" checked=\"checked\" type=\"checkbox\">\n                                            ";
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                                            <input style=\"display: none\" value=\""
    + escapeExpression(((stack1 = (depth0 && depth0.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" name=\"labels[]\" type=\"checkbox\">\n                                            ";
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <li>\n            <span class=\"filter-item color-label labelstyle-"
    + escapeExpression(((stack1 = (depth0 && depth0.color)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" title=\""
    + escapeExpression(((stack1 = (depth0 && depth0.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = (depth0 && depth0.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\n        </li>\n        ";
  return buffer;
  }

  buffer += "<div class=\"discussion-labels\">\n    <div class=\"label-manager\">\n        <strong>Labels</strong>\n        <div class=\"select-menu label-select-menu js-issue-show-label-select-menu js-menu-container js-select-menu\" data-url=\"";
  if (stack1 = helpers.dataUrl) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.dataUrl); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" data-multiple=\"\">\n            <span class=\"minibutton icon-only select-menu-button js-menu-target\">\n                <span class=\"octicon octicon-gear\"></span>\n            </span>\n            <form accept-charset=\"UTF-8\" action=\"";
  if (stack1 = helpers.dataUrl) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.dataUrl); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" method=\"post\"><div style=\"margin:0;padding:0;display:inline\">\n                <input name=\"_method\" value=\"put\" type=\"hidden\">\n                <input name=\"authenticity_token\" value=\"";
  if (stack1 = helpers.csrf_token) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.csrf_token); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" type=\"hidden\"></div>\n                <div class=\"select-menu-modal-holder js-menu-content js-navigation-container\">\n                    <div class=\"select-menu-modal\">\n                        <div class=\"select-menu-header\">\n                            <span class=\"select-menu-title\">Apply labels to this issue</span>\n                            <span class=\"octicon octicon-remove-close js-menu-close\"></span>\n                        </div>\n                        <div class=\"select-menu-error-shell\">\n                            <span class=\"select-menu-error js-select-menu-error\">Whoops, there was an error</span>\n                        </div>\n                        <div class=\"select-menu-filters\">\n                            <div class=\"select-menu-text-filter\">\n                                <input id=\"label-filter-field\" class=\"js-filterable-field js-navigation-enable\" placeholder=\"Filter labels\" autocomplete=\"off\" type=\"text\">\n                            </div>\n                        </div>\n                        <div class=\"select-menu-list\" data-filterable-for=\"label-filter-field\" data-filterable-type=\"substring\">\n                            ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.labels), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                        </div>\n                        <div class=\"select-menu-no-results js-not-filterable\">Nothing to show</div>\n                        <div class=\"select-menu-loading-overlay\">Loading…</div>\n                    </div>\n                </div>\n                <input class=\"js-issue-number\" name=\"issues[]\" value=\"";
  if (stack1 = helpers.issue) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.issue); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" type=\"hidden\">\n            </form>\n        </div>\n    </div>\n    <ul class=\"color-label-list filter-list small\">\n        ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.issueLabels), {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </ul>\n</div>\n";
  return buffer;
  });
})();
