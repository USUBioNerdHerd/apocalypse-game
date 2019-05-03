class Display {

    constructor(params) {
	//////////////////////////////
	// Basic plot to begin ///////
	//////////////////////////////
	// Canvas
	var canvas = document.querySelector("canvas");
	var context = canvas.getContext("2d");
	context.fillStyle = "red";
	context.fillRect(10, 10, 100, 50);

	// Background and components
	var boxes = document.querySelector("canvas").getContext("2d");
	boxes.strokeStyle = "blue";
	boxes.strokeRect(10, 100, 50, 50);
	boxes.lineWidth = 5;
	boxes.strokeRect(100, 100, 50, 50);
	context.fillStyle = "yellow";
	context.fillRect(100, 100, 50, 50);

	var lines = document.querySelector("canvas").getContext("2d");
	lines.beginPath();
	for (var y = 200; y < 300; y += 10) {
	    lines.strokeStyle = "green";
	    lines.moveTo(10, y);
	    lines.lineTo(90, y);
	}
	lines.stroke();

	var backdrop = canvas.getContext("2d");
	backdrop.fillStyle = "brown";
	context.fillRect(0, 0, 500, 500);

	// The landscape types
	var city = canvas.getContext("2d");
	backdrop.fillStyle = "gray";
	city.beginPath();
	city.moveTo(10, 10);
	city.lineTo(10, 70);
	city.lineTo(80, 120);
	city.lineTo(150, 90);
	city.lineTo(140, 40);
	city.fill();

	var farm = canvas.getContext("2d");
	backdrop.fillStyle = "green";
	farm.beginPath();
	farm.moveTo(490, 490);
	farm.lineTo(480, 270);
	farm.lineTo(300, 300);
	farm.lineTo(270, 460);
	farm.lineTo(400, 490);
	farm.fill();

	var forest = canvas.getContext("2d");
	backdrop.fillStyle = "orange";
	forest.beginPath();
	forest.moveTo(10, 490);
	forest.lineTo(200, 460);
	forest.lineTo(200, 200);
	forest.lineTo(50, 300);
	forest.lineTo(10, 450);
	forest.fill();

	var river = canvas.getContext("2d");
	backdrop.fillStyle = "blue";
	river.beginPath();
	river.moveTo(500, 0);
	river.lineTo(450, 0);
	river.lineTo(230, 200);
	river.lineTo(220, 500);
	river.lineTo(270, 500);
	river.lineTo(270, 270);
	river.lineTo(500, 50);
	river.fill();

	var labels = canvas.getContext("2d");
	labels.fillStyle = "white";
	labels.font = "20px Arial";
	labels.textAlign = "center";
	labels.fillText("City", 80, 70);
	labels.fillText("Forest", 80, 370);
	labels.fillText("Farm", 400, 400);
	labels.fillText("River", 350, 150);
	
    }

    update_environment(component, change) {
	// Make change to component
	// Call draw
    }

    // Draw current game state to screen
    draw(forest_hp, city_hp, farm_hp, river_hp, frame) {

	// load in ~~constant~~ parameters for:
	// dimensions of screen
	// boundaries of polygons for forest, city, farm, river
	// animation parameters, eg. frame rate, wiggle amount
	// sprites?

	// Perhaps we do something different at the start of the game?
	begin() {
	    //the environment start up will contain information: standard language; needs to remember information
	    //intial canvas of the map 
	    //welcome box..click on this welcome box. It then redirects you to the main screen of the game 
	    //title
	    //description box
	    //sound or music....maybe
	    
	}
	// draw background layer

	// draw each of 4 polygons

	// display sprite
	// determine position of sprite depending on frame
	// * alternatively, we could have multiple sprites instead of moving them
	// ** or, we should do both: moving, changing sprites

	// we need a function to define position and/or update sprite based on frame

	// pass frame to next iteration of draw()
	// alternatively, frame count be saved globally

    }

    ask_question(text, others){
	// Create a text box
	// The text box will have 4 answeres to a question
	// Each answer will be able to be selected by a button
	// Text box will have a nice 'stone' texture with a box at the top for the text to appear
	// 4 buttons below in a 2 x 2
    }
    
  function color_gradient(percent) {
  var numberOfItems = 100
  var rainbow = new Rainbow();
  percent = rainbow.setNumberRange(1, numberOfItems);
  color = rainbow.setSpectrum('red', 'black');
  backdrop.fillStyle = color;
  return rainbow.colourAt(percent);
}

var update_river = river.color_gradient(40)
