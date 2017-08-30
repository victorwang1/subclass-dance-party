describe('blinkyDancer', function() {

  var blinkyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    blinkyDancer = new BlinkyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(blinkyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(blinkyDancer.$node, 'toggle');
    blinkyDancer.step();
    expect(blinkyDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(blinkyDancer, 'step');
      expect(blinkyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps);
      expect(blinkyDancer.step.callCount).to.be.equal(1);
      clock.tick(timeBetweenSteps);
      expect(blinkyDancer.step.callCount).to.be.equal(2);
    });
  });

  describe('image', function() {
    it('classes should have different images', function() {
      var basicDancer = new Dancer(100, 100, 500);
      var superHero = new SuperHeroDancer(100, 100, 500);
      expect(basicDancer.$image).to.not.equal(superHero.$image);
    });
  });

  describe('constructor', function() {
    it('constructors should be set correctly', function() {
      var batman = new BatmanDancer(100, 100, 500);
      expect(batman.constructor).to.deep.equal(BatmanDancer);
    });
  });
});
