$(document).ready(function() {
  window.dancers = [];
  
  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var height = $("body").height();
    var dancer = new dancerMakerFunction(
      height / 2 - 0.1 * height + height / 2 * Math.random(), //2
      $("body").width() * Math.random(),//3
      Math.random() * 1000 //500
    );
    dancer.loadImage();
    $('body').append(dancer.$node);
  });
  
  $('#lineup').on('click', function(){
    var $dancers = $('.dancer');
    $dancers.css({"top": "50%"});
    var width = $("body").width() / $dancers.length;
    $.each($dancers, function(index, dancer) {
      dancer.css({"left": index * width});
    });
  });
  
  $(document.body).on('mouseenter', '.batman', function() {
    $(this).toggle();
  });

  $(document.body).on('mouseleave', '.batman', function() {
    $(this).toggle();
  });

});
