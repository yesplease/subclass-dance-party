var BabyDancer = function(top, left, timeBetweenSteps){
  this.$node = $('<span class="dancer animated bounceInDown baby"><img src="http://media.giphy.com/media/5fBH6zrcIiOs65zXCtG/giphy.gif" loop=infinite></span>');
  BlinkyDancer.call(this, top, left, timeBetweenSteps);
  // this.top = top;
  // this.left = left;
  //this.timeBetweenSteps = timeBetweenSteps;
};

BabyDancer.prototype = Object.create(BlinkyDancer.prototype);
BabyDancer.prototype.constructor = BabyDancer;

BabyDancer.prototype.step = function(){


BlinkyDancer.prototype.step.call(this);

  //this.$node.fadeToggle();
//   //if you want to easily add any functionality to the regular stepping interval,
//   //you need to explicitly call a .step method, either BlinkyDancer.prototype.step.call(this);
//   //or Dancer.prototype.step.call(this);
};

