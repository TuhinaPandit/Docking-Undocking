var bgImg;
var iss, spacecraft;
var hasDocked = false;

function preload() {

  issImg = loadImage("iss.png");
  bgImg = loadImage("spacebg.jpg");
  spaceCImg = loadImage("spacecraft1.png");
  spaceCUpImg = loadImage("spacecraft2.png");
  spaceCRightImg = loadImage("spacecraft3.png");
  spaceCLeftImg = loadImage("spacecraft4.png");
}

function setup() {
  createCanvas(600,350);

  iss = createSprite(300,130,50,50);
  iss.addImage(issImg);
  iss.scale = 0.4;

   spacecraft = createSprite(285,240,50,50)
   spacecraft.addImage(spaceCImg);
   spacecraft.scale = 0.15;

}

function draw() {
  background(bgImg);
  
 /* up();
  right();
  left();
*/

  if(!hasDocked){
    //write code to set random x position for spacecraft
    //keyEvents ();
  }
  
  drawSprites();
}

function left(){

  if(isPressed(left_arrow))
  spacecraft.addImage(spaceCLeftImg);

}


function right(){

  if(isPressed(right_arrow))
  spacecraft.addImage(spaceCRightImg);

}


function up(){

  if(isPressed(UP_ARROW))
  spacecraft.addImage(spaceCUpImg);

}

