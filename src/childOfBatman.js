var childOfBatman = function(top, left, timeBetweenSteps) {
  makeBatmanDancer.call(this, top, left, timeBetweenSteps);
  this.$image = $('<img src="src/resource/childOfBatman.jpg">');
}

childOfBatman.prototype = Object.create(makeBatmanDancer.prototype);
childOfBatman.prototype.constructor = childOfBatman;
childOfBatman.prototype.step = function() {
  this.$node.addClass('childOfBatman');
  this.$node.animate({height: "1000px"}, 1000);
}