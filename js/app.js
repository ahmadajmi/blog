$(document).ready(function() {

  'use strict';

  // =================
  // Responsive videos
  // =================

  $('.c-post').fitVids({
    'customSelector': ['iframe[src*="ted.com"], iframe[src*="speakerdeck.com"], iframe[src*="speakerdeck.net"]']
  });


  // =================
  // Off Canvas menu
  // =================

  $('.js-off-canvas-toggle').click(function(e) {
    e.preventDefault();
    $('.js-off-canvas-toggle').toggleClass('is-active');
    $('.js-off-canvas-container').toggleClass('is-active');
  });

});