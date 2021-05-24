var bg;
var thief1,thief2;
var ground1,ground2;
function preload(){
  bg = loadImage("1.jpg")
  thief1Image = loadImage("2-.png")
  thief2Image = loadImage("3-.png")
}
function setup(){
createCanvas(1600,750)

thief1 = createSprite(200,275,40,40)
thief1.addImage(thief1Image)
thief1.scale = 0.5

thief2 = createSprite(200,625,40,40)
thief2.addImage(thief2Image)
thief2.scale = 0.7

ground1= createSprite(800,375,1800,20)
ground1.visible = false

ground1= createSprite(800,725,1800,20)
ground1.visible = false
}
function draw(){
background(bg)
drawSprites();
}