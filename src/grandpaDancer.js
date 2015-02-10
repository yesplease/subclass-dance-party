var GrandpaDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  console.log('BlinkDancer is ', this);
};

GrandpaDancer.prototype = Object.create(Dancer.prototype);
GrandpaDancer.prototype.consturctor = GrandpaDancer;

GrandpaDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  //this.$node.toggle(); - update this with something unique to grandpas
};
