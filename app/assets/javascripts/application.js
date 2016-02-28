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



  $('#like').click(function() {

    $.post( "/", function( data ) {
      $( "#like-count" ).html( data );

      console.log(data)
      if (data % 15 === 0 ) {

        $('#myModal').modal()
        console.log('yes')

      }


    });

  });

// GIPHY

  q = "success"; // search query

  request = new XMLHttpRequest;
  request.open('GET', 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag='+q, true);

  request.onload = function() {
    if (request.status >= 200 && request.status < 400){
      data = JSON.parse(request.responseText).data.image_url;
      console.log(data);
      document.getElementById("giphyme").innerHTML = '<center><img src = "'+data+'"  title="GIF via Giphy" width="100%"></center>';
    } else {
      console.log('reached giphy, but API returned an error');
     }
  };

  request.onerror = function() {
    console.log('connection error');
  };

  request.send();
});







