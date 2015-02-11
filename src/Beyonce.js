var Beyonce = function(top, left, timeBetweenSteps){
  this.$node = $('<span class="beyonce dancer animated rollIn"><img src="http://media.giphy.com/media/CNgvFOu5kb2da/giphy.gif" loop=infinite></span>');
  Dancer.call(this, top, left, timeBetweenSteps);

};

Beyonce.prototype = Object.create(Dancer.prototype);
Beyonce.prototype.constructor= Beyonce;

Beyonce.prototype.step = function(){
  BlinkyDancer.prototype.step.call(this);
};
