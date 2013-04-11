// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require ace/ace
//= require ace/theme-github.js
//= require ace/mode-text.js
//= require ace/mode-c_cpp.js
//= require ace/mode-java.js
//= require ace/mode-javascript.js
//= require ace/mode-ruby.js
//= require ace/mode-html.js
//= require twitter/bootstrap
//= require_tree .
//= require turbolinks
function prettifyEditor() {
    var editor = ace.edit("editor");
    editor.setTheme("ace/theme/github");
}

$(document).ready(prettifyEditor);
$(document).on("page:load", prettifyEditor);
$(document).on("page:restore", prettifyEditor);
$(document).on("page:change", prettifyEditor);