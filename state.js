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
	document.getElementById("choice-text-block").innerHTML = data[curr_choice].summary;
	return([this.urban, this.forest, this.farmland, this.river]);
    }

}
