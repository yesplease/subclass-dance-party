var BlinkyDancer = function(top, left, timeBetweenSteps){
  //this.$node = $('<span class="dancer"><img src="http://media3.giphy.com/media/mKB2CVnHchGhy/200.gif" loop=infinite></span>')
  Dancer.call(this, top, left, timeBetweenSteps);
  //console.log("this is the old step: ", this.step);
  //var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

};
//BlinkyDancer.prototype.oldStep = Dancer.prototype.step; --don't think we need this b/c line 3
BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);

  //setTimeout(this.step, this.timeBetweenSteps);
  //this.oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.

  //this.$node.toggle();
};
