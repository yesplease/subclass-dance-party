// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  //var dancer = {}; -- because pseudoclassical uses 'new'

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer">Im a dancer!</span>');

  //sets when it takes the next step
  this.step();


  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);

  //return dancer;
};

Dancer.prototype.setPosition = function(top, left){
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
  console.log('setPosition has been invoked')
};

console.log("testing")
//put these into prototype, add 'this'
Dancer.prototype.step = function(){

  this.setPosition($("body").height() * Math.random(), $("body").width() * Math.random());

  setTimeout(this.step.bind(this), this.timeBetweenSteps);

};
