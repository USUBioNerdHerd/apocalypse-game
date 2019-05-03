function color_gradient(x, component) {
    numberOfItems = 100
    var rainbow = new Rainbow();
    rainbow.setNumberRange(0, numberOfItems);
    if (component == "City"){
	 textures.paths()
	    .d("squares")
	    .stroke("#777a79")
	rainbow.setSpectrum('white', 'black');
    }
    if (component == "Farm"){
	textures.lines()
	    .orientation("3/8")
	    .stroke("#015943")
	rainbow.setSpectrum("#165b02", "#47300a");
    }
    if (component == "Forest"){
	textures.paths()
	    .d("caps")
	    .stroke("#015943")
	rainbow.setSpectrum("#193a00", "#231600");
    }
    if (component == "River"){
	textures.paths()
	    .d("waves")
	    .stroke("#c0ddf7")
	rainbow.setSpectrum("#25a8f9", "#03002b");
    }
    return "#" + rainbow.colourAt(x);
}

function drawEverything(state) {

    // draws background
    var canvas = document.querySelector("canvas");
    var context = canvas.getContext("2d");
    var backdrop = canvas.getContext("2d");
    backdrop.fillStyle = "#997864";
    context.fillRect(0, 0, 500, 500);


    // to draw polygons
    function drawPoly(coords, color, label_text, label_coords, label_color = "white") {
	var poly = coords;
	var ctx = canvas.getContext('2d');
	ctx.fillStyle = color;

	ctx.beginPath();
	ctx.moveTo(poly[0], poly[1]);
	for( item=2 ; item < poly.length-1 ; item+=2 ){ctx.lineTo( poly[item] , poly[item+1] )}

	ctx.closePath();
	ctx.fill();

	var labels = canvas.getContext("2d");
	labels.fillStyle = label_color;
	labels.font = "20px Arial";
	labels.textAlign = "center";
	labels.fillText(label_text, label_coords[0], label_coords[1]);

    }

    var urban_color = color_gradient(state[0], "City");
    var farm_color = color_gradient(state[1], "Farm");
    var forest_color = color_gradient(state[2], "Forest");
    var river_color = color_gradient(state[3], "River");


    drawPoly([ 10,10, 10,70, 80,120, 150,90, 160,40 ], urban_color, "City", [80, 70]);
    drawPoly([ 490,490, 480,270, 300,300, 270,460, 400,490 ] , farm_color, "Farm", [400, 400]);
    drawPoly([ 10,490, 200,460, 200,200, 50,300, 10,450 ] , forest_color, "Forest", [80, 370]);
    drawPoly([ 500,0, 450,0, 230,200, 220,500, 270,500, 270,270, 500,50 ] , river_color, "River", [350, 150]);
}
