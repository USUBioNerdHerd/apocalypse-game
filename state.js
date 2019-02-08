class Choice {

    // When constructing a choice, there should be a choice that you get next
    // The first parameter will need more work I imagine
    constructor(text, option_one, option_two){
	this.option_one = option_one;
    }
    
    // Store information about the game state here:
    // Forest
    // Lake
    // Human
    
    
    // Option 1:
    // "Your community doesn't have enough housing.
    //  A forested area is in the surrounding area.
    //  Cut it down to make space for more housing
    //  or
    //  build higher density city? "

    // Forest health --1
    // human health ++1
    
    // Option 2:
    // "Your community is experiencing blackouts.
    //  There isn't enough energy to meet your needs.
    //  What kind of fuel would you like to use?
    //   A. Nuclear
    //   B. Coal
    //   C. Wind Turbine"

    
    // Forest health --1
    // Lake health --1
    // Human health ++1
    

    // Option 3:
    // "Your community needs food.
    //  How will you feed your people?
    //   A. Fish
    //   B. Raise Livestock
    //   C. Farm


    // Austin's notes
    
    // Question Order
    // Housing is needed (“People are coming”)
    // Cut down forest ⇒ Fragmentation
    // Increase city density ⇒ Urban quality goes down (river pollution, etc.)

    // Power is needed (“Our infrastructure can’t cope”)
    // Nuclear ⇒ Waste storage, decreased land quality
    // Coal ⇒ Decreased air quality
    // Wind turbines ⇒ Decreased birds, decreased recreation

    // Food is needed (“Feed us”)
    // Fish farm ⇒ bad river--instantly
    // Livestock ⇒ leaching

    // Recreation is needed (“Now we need fun”)
    // Forest ⇒ less farms, less food
    // Swim in the river ⇒ Worse river quality
    // Denser city ⇒ Pollution







    
