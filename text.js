var data = [
    {name:null, title:null,
     summary:"It seems like you've been driving for days, but it has really only been four hours. As a tree detective you have become used to a life of danger and intrigue. Everywhere you go people know your name, Dr. Sammie Jones. With a feather in your hat, you ride in your Honda Accord, breezing down the highway with your hands at 10 and 2. You see a billboard advertising for a city exit. 'Welcome to Brandenburg! Home of the first canine astronaught!' A strange force compells you to take the exit. As you drive down the main street of Brandenburg you notice a commotion at the City Hall. You park and enter Brandenburg City Hall. The room is hot and crowded with unhappy people. You are just about to get back in your car when several members of the angry public place you in a chair... They have made you their King. As their king, it is your duty to be a just and kind ruler. These are your challenges.",
     pop_sci:null, literature:null, choice:[{short:null,change:[0,0,0,0]},{short:null,change:[0,0,0,0]}]},
    "",
    {
    	name:"Housing Crisis",
    	title: "Toxic",
    	summary: "High levels of nutrients and hot days are combining to cause algal blooms in Lazybottom Lake. People have been warned about the toxins, but no one warned their dogs! Dogs have been dying as a result of swimming in the lake. The water quality experts say that the algal bloom in Lake Lazybottom is another casualty of Nitrogen and Phosphorous pollution in the water. They tell you that this pollution mainly comes from local agrigculture. Some experts are suggesting that programs be started to aide local farmers in adjusting their practices to reduce the amount of fertilizer that runs off into local lakes and streams. Others argue that wetland habitat should be expanded because it will clean the water. A few experts are arguing that it is worthwhile to install a filtration plant to clean the water.",
    	pop_sci: null,
    	literature: null,
    	choice: [
    	    {short:"Increase Wetland Habitat", change:[0, 10, 0, 20]},
    	    {short:"Install a Filtration Plant", change:[0, -10, 0, 15]}
	]
    },
    {
    	name: "Energy Crisis",
    	title: "BLACKOUT!",
    	summary: "Your community doesn't have enough electricity to meet its needs. Companies are eager to dig into coal reserves that exist outside the city limits, but there are concerns within the community about the impacts of burning coal on the local air quality. The federal government has been looking for a potential cities to power with small modular nuclear reactors. The citizens of the community are concerned that deuteriated water will leak into the water table. Wind energy and hydroelectric energy are available by placing wind mills in the foothills to the East and hydroelectric dams in the river to the West. The community memebers are generallly affable to pursue these options. Concerned members of the community worry that these solutions will inhibit fish migration patterns, decrease the prevalence of birds, and tarnish the beautiful landscape that fueled their reason to move here.",
    	"pop_sci": "https://www.nationalgeographic.com/environment/energy/reference/nuclear-energy/",
    	literature: null,
	choice: [
	    {short:"Use wind and hydroelectric energy", change:[20, -5, 0, 0]},
	    {short:"Burn coal and natural gas", change:[10, -10, -10, 0]}
	]
    },
    {
    	name: "Food Crisis",
    	title: "Hunger is among us",
	summary: "Over the past few years, your community has increasingly felt the impacts of food insecurity. While food banks and charitable organizations are doing a lot to feed hungry locals, many people are pointing to the high cost of local food. People have suggested that more food producers be allowed to use local resources to produce cheap food. An interested party has suggested starting a fish farm. Experts warn that fish farms have been known to affect local water quality. Others are suggesting that the less arable land to the West be sold as rangeland to increase local meat supplies. Officals worry about how large scale butcehr operations may affect the ecosystem.",
	"pop_sci": null, 
	literature: "https://science.sciencemag.org/content/333/6047/1289/tab-pdf",
	choice: [
	    {short:"Sell rangeland", change:[5, 10, -10, 0]},
	    {short:"Permit fish farms", change:[5, 0, 0, -10]}
	]
    },
    {
    	name:"Fun Crisis",
	title: "Fun in the Sun",
	summary: "Pristine pools and wilderness to the Southwest of your city have been attracting tourists for years. Instagram models have been taking picutres of themselves bathing in the pools, driving up tourism to those spots. While most of the tourists come to enjoy an authentic pristine wilderness area, the popularity of the spot has increased the amount of traffic through the area. State employees are regularly sent out to collect trash, remove waste, and clean graffiti. Budget-minded people are suggesting that more infrastructure such as public toilets and trash cans be installed at the location so that it is easier for the state to maintain the area. Activists are arguing that the area should be shut down to the public in an effort to restore the habitat to its previous quality. The local business community strongly opposes closing access to the pools because their livelihood is tied to the tourism driven by the pools.",
	"pop_sci": "https://theoutline.com/post/2450/instagram-is-loving-nature-to-death?zd=1&zi=z76muwwf",
	literature: "https://doi.org/10.1016/j.biocon.2016.10.009",
	choice: [
	    {sort:"Build more infrastructure", change:[10, 0, 0, -10]},
	    {sort:"Charge fees for entrace to the pools", change:[-5, 0, 0, 10]}
	]
    },
    {
    	name:"Environmental Crisis",
    	title: "A Green City",
	summary: "It's becoming clear that the city is taking an increasingly large toll on the local environment. As tourism increases and the number of people who want to live in the countryside increases, there are more sources of pollution. The homes being built are stretching towards virgin lands as people attempt to unite the comforts of the modern world with the beauty of a pristine environment. Locals are concerned about the impact they are having on their community. Some people are urging you to plant an urban forest to help clean the air and improve the quality of life of city-dwellers. Many are arguing that outreach should be increased to get homeowners to plant more trees on private land.",
	"pop_sci": "https://www.nature.com/articles/d41586-019-01026-8",
	literature: "https://esajournals.onlinelibrary.wiley.com/doi/pdf/10.1002/ecs2.2105",
	choice: [
	    {sort:"Plant a community urban forest", change:[5, 5, 0, 0]},
	    {sort:"Encourage locals to grow more trees locally", change:[10, 0, 0, 0]}
	]
    },
    {
    	name:"Land Usage Crisis",
    	title: "How to Farm the Farm",
	summary: "Experts tell you that the way that agricultural operations make a large impact on the environment. Some suggest that the community should adopt standards for crop cycling techniques. This may increase the diversity of birds and insects around farms. Others are arguing for a distributed agricultural technique, which they say could bring more food into cities and increase the quality of life of those without easy access to pristine outdoor habitat or clean air.",
	"pop_sci": null, 
	literature: null,
	choice: [
	    {sort:"Cycle crops", change:[0, 0, -10, -10]},
	    {sort:"Distributed agricultural systems", change:[0, -10, -5, -5]}
	]
    },
    {
    	name:"Air Quality Crisis",
    	title: "The air makes our children sick",
	summary: "The air quality in your city has its good days and its bad days. When polluted air is warmer than the air above it, it rises into the upper atmosphere and the pollution is carried away. However, the polluted air coming from your Mountain community is often cooler than the air above it. These 'inversions' cause the polluted air to stay in the community. The incidence of breathing problems is increasing in your community, and experts tell you that the average lifespan of the community is going to decrease if a solution isn't found to the air quality problem. Implementing reforms on transportation infrastructure could cut into the productivity of the community. Some are suggesting that you increase public transportation availablility to reduce the community's emmissions. Others argue that you should increase programs to encourage lifestyle choices that facillitate clean air within the community. Others are in support of a new program to plant more trees in street and neighborhoods to clean the air and filter out grime.",
	"pop_sci": "https://www.swep.net/refrigerant-handbook/5.-refrigerants/sd5/",
	literature: "https://onlinelibrary.wiley.com/doi/full/10.1002/ece3.2316",
	choice: [
	    {sort:"Overhaul of public transportation", change:[10, 5, 5, 5]},
	    {sort:"Outreach to locals", change:[5, 2, 2, 2]}
	]
    },
    {
	name:"Water Quality Crisis",
	title: "Toxic",
	summary: "High levels of nutrients and hot days are combining to cause algal blooms in Lazybottom Lake. People have been warned about the toxins, but no one warned their dogs! Dogs have been dying as a result of swimming in the lake. The water quality experts say that the algal bloom in Lake Lazybottom is another casualty of Nitrogen and Phosphorous pollution in the water. They tell you that this pollution mainly comes from local agrigculture. Some experts are suggesting that programs be started to aide local farmers in adjusting their practices to reduce the amount of fertilizer that runs off into local lakes and streams. Others argue that wetland habitat should be expanded because it will clean the water. A few experts are arguing that it is worthwhile to install a filtration plant to clean the water.",
	"pop_sci": "https://www.deseretnews.com/article/865580228/Utah-facing-costly-water-pollution-problem.html",
	literature: null,
	choice: [
	    {sort:"Increase wetland habitat", change:[0, 5, -5, 10]},
	    {sort:"Install a filtration plant", change:[0, 0, 0, 10]}
	]
    }
]
