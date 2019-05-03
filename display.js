class Display {

    constructor(params) {
	//////////////////////////////
	// Basic plot to begin ///////
	//////////////////////////////
	// Canvas
  function color_gradient(percent) {
    //var rainbow = new Rainbow();
    //percent = rainbow.setNumberRange(1, numberOfItems);
    //color = rainbow.setSpectrum('red', 'black');
    //backdrop.fillStyle = color;
    //return rainbow.colourAt(percent);
    return "black"
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
      //var poly=[ 105,105, 200,150, 150,200, 110,190 ];
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

    // what I ultimately want:
    // var urban_color <- color_gradient(State.urban);
    // var farm_color <- color_gradient(State.farmland);
    // var forest_color <- color_gradient(State.forest);
    // var river_color <- color_gradient(State.river);

    // a placeholder:
    var urban_color = color_gradient(50);
    var farm_color = color_gradient(40);
    var forest_color = color_gradient(30);
    var river_color = color_gradient(20);


    // city
    drawPoly([ 10,10, 10,70, 80,120, 150,90, 160,40 ], urban_color, "City", [80, 70], "red");

    // farm
    drawPoly([ 490,490, 480,270, 300,300, 270,460, 400,490 ] , farm_color, "Farm", [400, 400]);

    // forest
    drawPoly([ 10,490, 200,460, 200,200, 50,300, 10,450 ] , forest_color, "Forest", [80, 370]);

    // river
    drawPoly([ 500,0, 450,0, 230,200, 220,500, 270,500, 270,270, 500,50 ] , river_color, "River", [350, 150]);

  }



}

}


function color_gradient(percent) {
    var numberOfItems = 100
    var rainbow = new Rainbow();
    percent = rainbow.setNumberRange(1, numberOfItems);
    color = rainbow.setSpectrum('red', 'black');
    backdrop.fillStyle = color;
    return rainbow.colourAt(percent);
}
