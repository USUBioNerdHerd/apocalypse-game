// Function to handle mouse-clicks
function master_selection(choice){
    state.change_landscape(data[curr_choice].choice[choice].change);
}


// God-class that describes the entire system
class State {
    constructor(urban, forest, farmland, river){
	this.urban = urban;
	this.forest = forest;
	this.farmland = farmland;
	this.river = river;
    }

    change_landscape(choice_change){
	if(curr_choice != 0){
	    this.urban += choice_change[0];
	    this.forest += choice_change[1];
	    this.farmland += choice_change[2];
	    this.river += choice_change[3];
	}

	//engine.update(this);
	curr_choice += 1;
	document.getElementById("choice-text-block").innerHTML = data[curr_choice].summary;
	return([this.urban, this.forest, this.farmland, this.river]);
    }

}
