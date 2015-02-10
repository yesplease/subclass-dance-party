describe("blinkyDancer", function() {

  var blinkyDancer;
  var timeBetweenSteps = 100;
  var clock;
  // var babyDancer;
  // var grandpaDancer;


  beforeEach(function() {
    clock = sinon.useFakeTimers();
    //updated by adding 'new' - did nothing else -- moving us to 'pseudoclassical'
    blinkyDancer = new BlinkyDancer(10, 20, timeBetweenSteps);
    //babyDancer = new BabyDancer(10, 20, timeBetweenSteps);

  });

  it("should have a jQuery $node object", function(){
    expect(blinkyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its node blink", function() {
    sinon.spy(blinkyDancer.$node, 'toggle');
    blinkyDancer.step();
    expect(blinkyDancer.$node.toggle.called).to.be.true;
  });

  // it("should have a step function that makes it fade out", function() {
  //   sinon.spy(babyDancer.$node, 'fadeToggle');
  //   babyDancer.step();
  //   expect(babyDancer.$node.fadeToggle.called).to.be.true;
  // });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(blinkyDancer, "step");
      expect(blinkyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(blinkyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(blinkyDancer.step.callCount).to.be.equal(2);
    });
  });
});


describe("babyDancer", function() {

  //var blinkyDancer;
  var timeBetweenSteps = 100;
  var clock;
  var babyDancer;
  var grandpaDancer;


  beforeEach(function() {
    clock = sinon.useFakeTimers();
    //updated by adding 'new' - did nothing else -- moving us to 'pseudoclassical'
    //blinkyDancer = new BlinkyDancer(10, 20, timeBetweenSteps);
    babyDancer = new BabyDancer(10, 20, timeBetweenSteps);

  });

  it("should have a jQuery $node object", function(){
    expect(babyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its node blink", function() {
    sinon.spy(babyDancer.$node, 'toggle');
    babyDancer.step();
    expect(babyDancer.$node.toggle.called).to.be.true;
  });

  it("should have a step function that makes it fade out", function() {
    sinon.spy(babyDancer.$node, 'fadeToggle');
    babyDancer.step();
    expect(babyDancer.$node.fadeToggle.called).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(babyDancer, "step");
      expect(babyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(babyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(babyDancer.step.callCount).to.be.equal(2);
    });
  });
});
