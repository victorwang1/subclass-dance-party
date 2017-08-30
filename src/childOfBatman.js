var ChildOfBatman = function(top, left, timeBetweenSteps) {
  BatmanDancer.call(this, top, left, timeBetweenSteps);
  this.$image = $('<img src="src/resource/childOfBatman.jpg">');
}

ChildOfBatman.prototype = Object.create(BatmanDancer.prototype);
ChildOfBatman.prototype.constructor = ChildOfBatman;
ChildOfBatman.prototype.step = function() {
  this.$node.addClass('childOfBatman');
  this.$node.animate({height: "1000px"}, 1000);
}
