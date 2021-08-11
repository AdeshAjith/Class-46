var hero,heroImage
var invader
var earth,earthImage
var backGround,MeteorImage
var InvaderImage
var count = 1

var Invader

function preload(){
  earthImage = loadImage("images/Earth.png")
  heroImage = loadImage("images/SuperHero.png")
  backGround = loadImage("images/Space.jpg")
  MeteorImage = loadImage("images/Meteor.png")
  InvaderImage = loadImage("images/Invaders.png")

}

function setup() {

  createCanvas(1200,650);

  hero = createSprite(600,425)
  hero.addImage(heroImage)
  hero.scale = 0.12

  

  earth = createSprite(600,575)
  earth.addImage(earthImage)
  earth.scale = 0.15

}

function draw() {
  background(backGround); 
  hero.velocityX = 0
  hero.velocityY = 0

  Meteors()
  
  Invaders()
  
    
    
 
  if(keyDown(RIGHT_ARROW)){
    hero.velocityX = 5
  }

  if(keyDown(LEFT_ARROW)){
    hero.velocityX = -5
  }
  
  hero.display() 

  earth.display()
  
  drawSprites();
}

function Meteors(){
  if(frameCount%100 === 0){
    var rand = Math.round(random(300,900))
    var Meteor = createSprite(rand,-50)
    Meteor.addImage(MeteorImage)
    Meteor.velocityY = 3
    Meteor.scale = 0.05
    Meteor.lifetime = 150

  }
}

function Invaders(){
  var rand = Math.round(random(300,900))
  if(frameCount%100 === 0){
    
    if(count<=5){
      
      Invader = createSprite(rand,20)

      Invader.addImage(InvaderImage)
      Invader.scale = 0.05
      count = count+1
    }
  }
  if(frameCount%100 === 0){
    var laser1 = createSprite(Invader.x-5,40,5,12)
    laser1.shapeColor = "red"
    laser1.velocityY = 2

    var laser2 = createSprite(Invader.x+5,40,5,12)
    laser2.shapeColor = "red"
    laser2.velocityY = 2
  }
}