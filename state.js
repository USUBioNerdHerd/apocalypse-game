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

	

}

select_option1(){
    master_selection(1)
}

select_option2(){		
    master_selection(2)}

master_selection(choice){
    if(choice == 1)
	state.change_landscape(data[curr_choice][0]);
    state.change_landscape(data[curr_choice][1]);
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
		if (this.urban < 0) {
   		console.log(Urban environment depleted)
   		this.urban = 0;
		} 
	this.forest += choice_change[1];
		if (this.forest < 0) {
   		console.log(Forest environment depleted)
   		this.forest = 0;
		} 
	this.farmland += choice_change[2];
		if (this.farmland < 0) {
   		console.log(Farmland depleted)
   		this.farmland = 0;
		} 
	this.river += choice_change[3];
		if (this.river < 0) {
   		console.log(River environment depleted)
   		this.river = 0;
		} 

	//engine.update(this);
	curr_choice += 1;
	document.write(data.option[curr_choice]);
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
