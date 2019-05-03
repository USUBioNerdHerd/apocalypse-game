class Choice {

    // When constructing a choice, there should be a choice that you get next
    // The first parameter will need more work I imagine

    constructor(text, option_one, option_two, change_one, change_two){
	this.text = text;
	this.option_one = option_one;
	this.option_two = option_two;
	this.change_one = change_one;
	this.change_two = change_two;
    }

    pick_choice(choice){
		var choiceDisplay = prompt("You have a choice to make : " + first_choice);
		if (choiceDisplay == "1") {
			alert("You decided to " + option_one + "let's see what happens...");
		}
		else if (choiceDisplay == "2"){
			alert("You decided to " + option_two + "let's see what happens...");
		}
		else {
			alert("That isn't one of your options! You can enter either 1 or 2.");
		}

	if(choice == this.option_one)
	    return(this.change_one);
	return(this.change_two);
    }
}


// God-class that describes the entire system
class State {
    constructor(urban, forest, farmland, river){
	this.urban = urban
	this.forest = forest
	this.farmland = farmland
	this.river = river;
    }
    
    change_landscape(choice_change){
	this.urban += choice_change[0];
	this.forest += choice_change[1];
	this.farmland += choice_change[2];
	this.river += choice_change[3];
	
	return([this.urban, this.forest, this.farmland, this.river]);
    }

}

// This allows you to write code of the form:

//first_choice = Choice(from, justins, yaml, stuff);
//second_choice = Choice(other, stuff from, justins, yaml);

//game_state = State(50, 50, 50, 50);
//game_state.change_landscape(first_choice.pick_choice());
//game_state.change_landscape(second_choice.pick_choice());
// ... or do this using loops for greater efficiency etc.
