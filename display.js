class Display {

    constructor(params) {
	this.attribute = something;
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

    }

    // Perhaps we do something different at the start of the game?
    begin() {

    }

    // Perhaps we do something different at the end of the game?
    end() {

    }
}
