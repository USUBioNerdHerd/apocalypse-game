class Display {

    constructor(params) {
	this.attribute = something;
	//size of display image
	    //do we want to start by creating a variable containing the dimensions
	    //make display image
	    //call display image
	
	//size of individual sections (forest, river, urban, ...)
	
	//shape of the individual sections
	
	//size of the question box
	
	//shape of the question box
	
	//
	
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
