// Function to handle mouse-clicks
function master_selection(choice){
    if(curr_choice >= choice)
	state.change_landscape(data[curr_choice].choice[choice].change);
}

// Wrapper for environment checks
function check_env(x, name){
    if(x < 0){
	console.log(name + " depleted");
	return(0)
    }
    if(x > 100){
	console.log(name + " saturated");
	return(100)
    }
    return(x)
}

// God-class that describes the entire system
class State {
    constructor(urban, forest, farmland, river){
	this.urban = urban;
	this.forest = forest;
	this.farmland = farmland;
	this.river = river;
    }

    current_state(){
	return([this.urban, this.forest, this.farmland, this.river])
    }

    change_landscape(choice_change){
	
	this.urban += choice_change[0];
	this.urban = check_env(this.urban, "urban");
	this.forest += choice_change[1];
	this.forest = check_env(this.forest, "forest");
	this.farmland += choice_change[2];
	this.farmland = check_env(this.farmland, "farmland");
	this.river += choice_change[3];
	this.river = check_env(this.river, "river");
	
	drawEverything(this.current_state())
	curr_choice += 1;
	document.getElementById("choice-text-block").innerHTML = data[curr_choice].summary;
	document.getElementById("choice-text-title").innerHTML = data[curr_choice].title;
	document.getElementById("choice-text-short").innerHTML = data[curr_choice].choice[2].text;
	document.getElementById("choice_one_button").innerHTML = data[curr_choice].choice[0].short;
	document.getElementById("choice_two_button").innerHTML = data[curr_choice].choice[1].short;

	return([this.urban, this.forest, this.farmland, this.river]);
    }

}

