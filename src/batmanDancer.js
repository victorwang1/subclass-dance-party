var BatmanDancer = function(top, left, timeBetweenSteps) {
  SuperHeroDancer.call(this, top, left, timeBetweenSteps);
  this.timeBetweenSteps = timeBetweenSteps;
  this.$image = $('<img src="src/resource/batman.gif">');
};

BatmanDancer.prototype = Object.create(SuperHeroDancer.prototype);
BatmanDancer.prototype.constructor = BatmanDancer;
BatmanDancer.prototype.step = function() {
  this.$node.addClass('batman');
};
