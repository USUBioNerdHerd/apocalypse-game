class Choice {

    // When constructing a choice, there should be a choice that you get next
    // The first parameter will need more work I imagine
    constructor(text, option_one, option_two){
	this.option_one = option_one;
    }
// the text will have the question that affects the class State. This happens by choosing either option_one OR option_two
    pick_choice(){
	// This should call Display.ask_question()
	return(appropriate_choice);
    }
    
    
}

// God-class that describes the entire system
class State {
    constructor(urban, forest, farmland, river){
// constructor urban creates class urban, and we can have different objects within it. We are given choices (binaries), based on which 
// the objects under class urban changes. 	  
// The same for the rest of the constructors
// 
	    this.urban = urban
	    this.forest = forest
	    this.farmland = farmland
	    this. river = river
    }

    consequences_choice(choice){
	    if (choice = option_one)
	    this.urban = urban+1
	    this.forest = forest-1
	    this.farmland = farmland -1
	    this.river= river-1
	// Carry out the choice
	// Should probably call Display.draw()
    }
}
