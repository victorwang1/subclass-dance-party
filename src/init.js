$(document).ready(function() {
  window.dancers = [];
  var movedDancers = [];

  $('.addDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];

    var height = $('body').height();
    var dancer = new dancerMakerFunction(
      height / 2 - 0.1 * height + height / 2 * Math.random() - 0.2 * height, //2
      $('body').width() * Math.random(),//3
      Math.random() * 1000 //500
    );
    dancer.loadImage();
    $('body').append(dancer.$node);
    $('.dancer').draggable();
  });

  $('#interact').on('click', function() {
    var $dancers = $('.dancer');
    var dancer1 = $dancers[Math.floor(Math.random() * $dancers.length)];
    var dancer2 = $dancers[Math.floor(Math.random() * $dancers.length)];

    var height = $('body').height();
    var width = $('body').width();

    $(dancer1).animate({top: height/2, left: width/2 - 50}, 500);
    $(dancer2).animate({top: height/2, left: width/2 + 50}, 500);
  });


  $('#lineup').on('click', function() {
    var $dancers = $('.dancer');
    $dancers.css({'top': '40%'});
    var width = $('body').width() / $dancers.length;

    $.each('.dancers', function(index, dancer) {
      dancer.css({'left': index * width});
    });
  });

  $(document.body).on('mouseenter', '.batman', function() {
    $(this).toggle();
  });

  $(document.body).on('mouseleave', '.batman', function() {
    $(this).toggle();
  });

});
