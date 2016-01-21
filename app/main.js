require('./stylesheets/main.scss');
require('./img/logo.svg');
require('./fonts/ConduitITCStd.otf');
require('./fonts/ConduitITCStd-Bold.otf');
require('./fonts/ConduitITCStd-BoldItalic.otf');
require('./fonts/ConduitITCStd-Italic.otf');
import $ from 'jquery';
let Scrollax = require('scrollax');
let parallax = new Scrollax(window, {'horizontal': true}).init();
let mouseWheel = require('jquery-mousewheel');

$(document).ready(function(){
  var offset = $('#neutral').position().left;
  window.scrollTo(offset, 0);
});

$(window).resize(function(e) {
  parallax.reload();
});

$('html, body').mousewheel(function(event) {
  $('html, body').stop(true,true).animate({scrollLeft: '-='+event.deltaY},50);
  event.preventDefault();
});
