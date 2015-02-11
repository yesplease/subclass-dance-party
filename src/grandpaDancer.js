var GrandpaDancer = function(top, left, timeBetweenSteps){
  this.$node = $('<span class = "grandpa dancer animated infinite flip"><img src = "http://media.giphy.com/media/63BVu4M5jZZi8/giphy.gif" loop = infinite></img></span>');
  Dancer.call(this, top, left, timeBetweenSteps);
  //this.$node = $('<span class = "dancer"><img src = "http://media.giphy.com/media/63BVu4M5jZZi8/giphy.gif" loop = infinite></img></span>')
  // this.setPosition(top, left);
};

GrandpaDancer.prototype = Object.create(Dancer.prototype);
GrandpaDancer.prototype.consturctor = GrandpaDancer;

GrandpaDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  //this.$node.toggle(); - update this with something unique to grandpas
};
