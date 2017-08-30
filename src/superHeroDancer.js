var SuperHeroDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.timeBetweenSteps = timeBetweenSteps;
  this.$image = $('<img src="src/resource/superhero.gif">');
};

SuperHeroDancer.prototype = Object.create(Dancer.prototype);
SuperHeroDancer.prototype.constructor = SuperHeroDancer;
SuperHeroDancer.prototype.step = function() {
  Dancer.prototype.step.call(this, this.timeBetweenSteps);

};
