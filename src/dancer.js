var Dancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  this.$image = $('<img src="src/resource/dancer.gif">');
  this.setPosition(top, left);
  this.step(timeBetweenSteps);
};

Dancer.prototype.step = function(timeBetweenSteps) {
  setTimeout(this.step.bind(this), timeBetweenSteps);
};
Dancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};
Dancer.prototype.loadImage = function() {
  this.$node.append(this.$image);
};
