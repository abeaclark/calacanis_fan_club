// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require jquery
//= require bootstrap-sprockets
//= require_tree .



$(function() {
  // Video Plugin
  $( ".index-image-overlay:eq(0)" ).append( $('.squarepluginsvideo') );
  $('#squarepluginsvid').get(0).play();
  $(window).load(function() {
    var allImages = document.querySelectorAll('');
    for (var i = 0; i < allImages.length; i++) {
      ImageLoader.load(
        allImages[i],
        {
          load: 'viewport',
          mode: 'fill'
        }
      );
    }
  });
});
