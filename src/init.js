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
  });

  $('#interact').on('click', firstClick);

  function firstClick() {
    var $dancers = $('.dancer');
    var dancer1 = $dancers[Math.floor(Math.random() * $dancers.length)];
    var dancer2 = $dancers[Math.floor(Math.random() * $dancers.length)];
    movedDancers.push(dancer1, dancer2);

    var randomTop = $('body').height() * Math.random();
    var randomLeft = $('body').width() * Math.random();

    $(dancer1).css({'top': randomTop, 'left': randomLeft});
    $(dancer2).css({'top': randomTop, 'left': randomLeft + 500});
    $('#interact').off('click').on('click', secondClick);
  };

  function secondClick() {
    $(movedDancers[0]).animate({top:"-=50px", left: "30px"},500);
    $(movedDancers[1]).animate({top:"-=70px", left: "100px"},500);
    // movedDancers.forEach(element => $(element).animate({top: "500"},1000))
    // this.$node.animate({height: "1000px"}, 1000);
    $('#interact').off('click').on('click', firstClick);
  };


  //
  // $('#interact').on('click', function() {
  //   $('#interact').toggle(function() {
  //     var $dancers = $('.dancer');
  //     var dancer1 = $dancers[Math.floor(Math.random() * $dancers.length)];
  //     var dancer2 = $dancers[Math.floor(Math.random() * $dancers.length)];
  //     movedDancers.push(dancer1, dancer2);
  //
  //     var randomTop = $('body').height() * Math.random();
  //     var randomLeft = $('body').width() * Math.random();
  //
  //     $(dancer1).css({'top': randomTop, 'left': randomLeft});
  //     $(dancer2).css({'top': randomTop, 'left': randomLeft + 50});
  //   }, function() { movedDancers.forEach(element => $(element).hide()) }
  //   );
  // });

  $('#lineup').on('click', function() {
    var $dancers = $('.dancer');
    $dancers.css({'top': '40%'});
    var width = $('body').width() / $dancers.length;
    // debugger;
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

  // var interact = function() {
  //   var distances = [];
  //   var $dancers = $('.dancer');
  //   $.each($dancers, function(i, dancer1) {
  //     $.each($dancers, function(j, dancer2) {
  //       distances[i][j] = dancer;
  //     });
  //   });
  //   console.log(distances);
  // };

});
