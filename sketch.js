//Create variables here
var dog,happydog,database,foodS,foodstock;

function preload()
{
  //load images here
  dog1 = loadImage("images/dogImg.png")
  dog2 = loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(500, 500);
  database=firebase.database()

  dog = createSprite(250,250,10,10) 
  dog.addImage(dog2)
  dog.scale = 0.2
  
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
 background(46,139,87)
  drawSprites();
  //add styles here

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dog1)
  }
  fill("crimson")
  textSize(30)
  stroke(20)
  text("press up arrow key to feed truffle <3 ",7,40)

}

function readStock(data) {
  foodS = data.val();
}

function writeStock(x) {
  if(x<=0){
    x=0;
  }else {
    x=x-1
  }
  
  database.ref('/').update({
    Food:x
  })
}

