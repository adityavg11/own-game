var naruto,narutoimg,bckgrd;
var danzo,danzoimg,rasenganimg,rasengan;
var obstacle1,obstacle2;
var obstacle1img,obstacle2img
var invisiblewall1,invisiblewall2;
var life=3,villianlife=3;
var rasenganthrowimg;
var gamestate;


function preload(){
narutoimg=loadImage("player.png")
bckgrd=loadImage("gif.gif")
danzoimg=loadImage("danzo.jpeg")
rasenganimg=loadImage("rasengan.png")
obstacle1img=loadImage("kunai.jpg")
obstacle2img=loadImage("obstacle.jpg")
rasenganthrowimg=loadImage("battle.jpg")
}





function setup() {
  createCanvas(windowWidth,windowHeight);
 naruto=createSprite(70,height/2, 50, 50);
 naruto.addImage(narutoimg);
 naruto.scale=0.4

 danzo=createSprite(1200,height/2, 50, 50);
 danzo.addImage(danzoimg);
 danzo.scale=0.8

 invisiblewall1=createSprite(1200,10,400,20);
invisiblewall1.visible=false;

invisiblewall2=createSprite(1200,648,400,20)
invisiblewall2.visible=false;

obstaclesGroup=new Group()
naruto.debug=true
rasenganGroup=new Group()
rasenganGroup.debugEach=true

}

function draw() {
 
 
 
 
  background(bckgrd);
  


  textSize(20)
  fill("yellow")
  text("VILLIAN LIFE:"+villianlife,1100,30)
  
  
  
  textSize(20)
  fill("red")
  text("HERO LIFE:"+life,70,30)



  

  if(keyDown(UP_ARROW)){
naruto.velocityY=-4
}

if(keyDown(DOWN_ARROW)){
  naruto.velocityY=4
  }
  
if(keyWentDown(32)){
SpawnRasengan();
naruto.addImage(rasenganthrowimg)
}

if(keyWentUp(32)){
naruto.addImage(narutoimg);

}



if(obstaclesGroup.isTouching(naruto)){

  for(var i=0;i<obstaclesGroup.length;i++){     
       
   if(obstaclesGroup[i].isTouching(naruto)){
        obstaclesGroup[i].destroy()
 //Decrease the life
 life-=1
        } 
  
  }
 }
 if(obstaclesGroup.isTouching(rasenganGroup)){
  
obstaclesGroup.destroyEach();
        rasenganGroup.destroyEach()
        }

if(rasenganGroup.isTouching(danzo)){
villianlife-=1
rasenganGroup.destroyEach();

}

if(villianlife===0){

  danzo.destroy();
  obstaclesGroup.destroyEach();
  
  textSize(60)
  fill("red")
  text("YOU WIN!! CONGRATS YOU DEFEATED THE ENEMY",20,200)


  
}

if(life===0){

  obstaclesGroup.destroyEach();
  naruto.destroy()
  rasenganGroup.destroyEach();
  
  textSize(60)
  fill("yellow")
  text("YOU LOST!!DANZO DEFEATED YOU",200,200)
  

}







spawnObstacles();


  drawSprites();

}

 function SpawnRasengan(){
rasengan=createSprite(naruto.position.x+50,naruto.position.y,20,20);
rasengan.addImage(rasenganimg);
rasengan.velocityX=5;
rasengan.lifetime=390;
rasengan.scale=0.6
rasenganGroup.add(rasengan)
 }

 function spawnObstacles(){
if(frameCount%100===0){


  obstacle1=createSprite(random(1100,1300),random(0,648),50,50)
   obstacle1.addImage(obstacle1img);
obstacle1.velocityX=-3;
obstacle1.lifetime=390;


obstacle1.scale=0.6;
obstaclesGroup.add(obstacle1);
}




 }

