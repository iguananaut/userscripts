GitHub Labels on Pull Requests
==============================

This Greasemonkey script adds support for label management on GitHub's pull request UI:

    Before:
    
    .. image:: https://raw.github.com/iguananaut/userscripts/master/github/labels_on_pull_requests/images/screenshot4.png
      :alt: GitHub pull request without labels
      :align: center
    
    After:
    
    .. image:: https://raw.github.com/iguananaut/userscripts/master/github/labels_on_pull_requests/images/screenshot3.png
      :alt: Adding a label to a pull request
      :align: center
    
    (adding a label)
    
    .. image:: https://raw.github.com/iguananaut/userscripts/master/github/labels_on_pull_requests/images/screenshot2.png
      :alt: Pull request with labels
      :align: center
    
    (now with labels!)

GitHub pull requests all have an underlying issue associated with them, and as such can have labels associated with them.
In fact, GitHub allows managing labels on pull requests via the issue list UI.  But mysteriously, GitHub has opted not
to include issue management on the UI for a single pull request, as they do on the UI for single issues.  This script
recreates the label selection menu on pull requests and displays all labels currently applied to each pull request.
