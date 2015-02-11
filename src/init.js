$(document).ready(function(){
  window.dancers = [];

//ELEMENT CLICK HANDLER

//find element that was clicked
//find its coodinates
//track closest element as a variable
//for ever object in dancers array
  //calculate distance between clicked element and element[i] in array
  //update closest element if necessary
//make closest element and clicked element do something unique
$(document).on("click", ".dancer", function(event){
  var clickedCoordinates = $(event.currentTarget).position();
  //console.log(clickedCoordinates.top);
  //var newStyleSettings = {top:100, left:100};
  //$(event.currentTarget).css(newStyleSettings);

  var shortestIndex;

  var distanceFinder = function(xarg, yarg){
    var dist = Math.sqrt(xarg * xarg + yarg * yarg);
    if (dist < shortestDistance){
      shortestDistance = dist;
      shortestIndex = i;
    }
  }

  for (var i =0; i < window.dancers.length; i++){
    var otherCoordinates = window.dancers[i].$node.position();
    var xDiff = otherCoordinates.left - clickedCoordinates.left;
    var yDiff = otherCoordinates.top - clickedCoordinates.top;
    var shortestDistance = 10000000000000000;

    if (xDiff === 0 && yDiff === 0){
      continue;
    } else {
    distanceFinder(xDiff, yDiff);
    }

    //console.log(window.dancers[i].$node.position());

  }
  // console.log(shortestIndex);
  var dancingPartnerPosition = window.dancers[shortestIndex].$node.position();
  $(event.currentTarget).animate({"top": ""+dancingPartnerPosition.top, "left": ""+dancingPartnerPosition.left}, "slow");
  window.dancers[shortestIndex].$node.animate({"top": ""+clickedCoordinates.top, "left": ""+clickedCoordinates.left}, "slow");


});



//ELEMENT EVENT HANDLERS

  $(document).on("mouseover", ".grandpa", function(event){
    $(event.currentTarget).toggleClass("infinite flip");
  });

  $(document).on("mouseover", ".beyonce", function(event){
    $(event.currentTarget).removeClass("rollIn");
    $(event.currentTarget).toggleClass("infinite pulse");

  });

  $(document).on("mouseover", ".baby", function(event){
    //console.log("click works!")
    $(event.currentTarget).removeClass("bounceInDown");
    $(event.currentTarget).addClass("lightSpeedOut");
  });


//BUTTON EVENT HANDLERS


  $(".clearTheFloor").on("click", function(event){
    $("body").children(".dancer").removeClass('infinite flip');
    $("body").children(".dancer").addClass("rollOut");
    window.dancers = [];

    setTimeout(function(){
      $("body").children(".dancer").remove();

    }, 1000);

  });

  $(".lineUpDancers").on("click", function(event){
    //iterate over window.dancers array
    for ( var i = 0; i < window.dancers.length; i++ ){
      dancers[i].top = $("body").height() / 2;
      dancers[i].$node.animate({"top":""+dancers[i].top}, "slow");
      //dancers[i].setPosition(window.dancers[i].top, window.dancers[i].left);
    }
      //for each dancer object, set the position to a set x or y position.
      //window.dancers[0]

  });

  $(".addDancerButton").on("click", function(event){


    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });
});

