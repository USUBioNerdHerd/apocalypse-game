class Choice {

    // When constructing a choice, there should be a choice that you get next
    // The first parameter will need more work I imagine
    constructor(text, option_one, option_two){
	this.option_one = option_one;
    }

    pick_choice(){
	// This should call Display.ask_question()
	return(appropriate_choice);
    }
    
    
}

// God-class that describes the entire system
class State {
    constructor(urban, forest, farmland, river){
	this.urban = urban
    }

    consequences_choice(choice){
	// Carry out the choice
	// Should probably call Display.draw()
    }
}
