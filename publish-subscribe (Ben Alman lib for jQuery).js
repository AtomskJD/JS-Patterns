;(function ($) {
  // pre compile templates and "cache" them using closure

  var userTemplate = _.template($("#userTemplate").html()),
      ratingsTemplate = _.template($("#ratingsTemplate").html());

  // subscribe to the new user topic
  $.subscribe("/new/user", function ( e, data ) {
    if ( data ) {
      $("#users").append( userTemplate(data) );
    }
  });


  // subscribe to the new rating topic
  $.subscribe("/new/rating", function ( e, data ) {
    if (data) {
      $("#ratings").append( ratingsTemplate(data) );
    }
  });

  $('#add').on("click", function (e) {
    e.preventDefault();

    var strUser = $('#twitter_handle').val(),
        strMovie = $('#movie_seen').val(),
        strRating = $('#movie_rating').val();

    $.publish("/new/user", {name: strUser});
    $.publish("/new/rating", {title: strMovie, rating: strRating});
  });
})( jQuery );
