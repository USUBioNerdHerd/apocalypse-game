function color_gradient(x, component) {
    numberOfItems = 100
    var rainbow = new Rainbow();
    rainbow.setNumberRange(0, numberOfItems);
    if (component == "City"){
	rainbow.setSpectrum('white', 'black');
    }
    if (component == "Farm"){
	rainbow.setSpectrum('green', 'yellow');
    }
    if (component == "Forest"){
	rainbow.setSpectrum('green', 'brown');
    }
    if (component == "River"){
	rainbow.setSpectrum('blue', 'brown');
    }
    return "#" + rainbow.colourAt(x);
}

function drawEverything(state) {

    // draws background
    var canvas = document.querySelector("canvas");
    var context = canvas.getContext("2d");
    var backdrop = canvas.getContext("2d");
    backdrop.fillStyle = "purple";
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

    var urban_color = color_gradient(state[0]);
    var farm_color = color_gradient(state[1]);
    var forest_color = color_gradient(state[2]);
    var river_color = color_gradient(state[3]);


    drawPoly([ 10,10, 10,70, 80,120, 150,90, 160,40 ], urban_color, "City", [80, 70], "red");
    drawPoly([ 490,490, 480,270, 300,300, 270,460, 400,490 ] , farm_color, "Farm", [400, 400]);
    drawPoly([ 10,490, 200,460, 200,200, 50,300, 10,450 ] , forest_color, "Forest", [80, 370]);
    drawPoly([ 500,0, 450,0, 230,200, 220,500, 270,500, 270,270, 500,50 ] , river_color, "River", [350, 150]);
}
