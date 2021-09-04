var currentColor;
var colors=["white","black", "yellow"];

function setup() {
    //size of the canvas to draw on
    createCanvas(innerWidth,innerHeight); 

    // Set the background to white, and move the line to setup();
    background("black");

}

function draw()
{

  let x = 0;
    for (i = 0; i < colors.length; i++){

       //make an object for each color box:
        var currentColor = new ColorButton(x, 0, 100, 50, colors[i] );  
        currentColor.appear();
        x = x + 100;
    }

  if(mouseIsPressed)
  {
    if (mouseX > 0 && mouseX < 100) {
      currentColor = "white";
    
    } else if (mouseX > 100 && mouseX < 200) {
      currentColor = "black";
    } 
    else if (mouseX > 200  &&  mouseX < 300){
      currentColor = "yellow";
    }
    
    changeBackground(currentColor);
  }

}

function changeBackground(currentColor){
  background(currentColor);
}
