var dog,sadDog,happyDog;
var foodObj;
var foodS,foodStock;
var feedTime,lastFed,feed,addFood;



function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}




function setup() {
 database = firebase.database
  createCanvas(1000,400);

  foodObj=new Food ();

  foodStock=database.ref('ref');
  foodStock.on('value',readStock);

    
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  
  feed= createButton("feed The dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);

  addFood=createButton("Add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);

}

function draw() {
  background(46,139,87);

 foodObj=display();

 fedTime=database.ref('FeedTime');
 fedTime.on('value',function(data){
    lastFed=data.val();
 })

 fill(255,255.254);
 textSize(20);
 text("LAST FEED : 12 AM ",350,30);

 if(lastFed>=12){
   text("LAST FEED :"+lastFed %12+ "PM",350,30);
 }

 else if(lastFed ===0){
   text("LAST FEED : 12AM",350,30);

 }

 else{
  text("LAST FEED " + lastFed + "AM",350,30);

}
 
 
  drawSprites();
}

//function to read food Stock

function readStockreadstock(data){
  foodS = data.val();
  foodObj.updateFoodStock(foodS);

}

//function to update food stock and last fed time
function feedDog(){
  dog.addImage(happyDog);
}

//function to add food in stock
function addFoods(){
foodS++;
database.ref('/').update({
 Food:FoodS
})
}