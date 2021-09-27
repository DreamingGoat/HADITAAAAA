var bandera = 0;
var starImg,bgImg;
var star, starBody;
var fairyVoice, fairyImg, fairy
//crea la variable para el sprite del hada y fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	//carga aquí la animación del hada
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png")
	fairyVoice = loadSound("sound/JoyMusic.mp3")
}

function setup() {
	createCanvas(800, 750);

	//escribe el código para reproducir el sonido fairyVoice
	fairyVoice.play();
	//crea el sprite del hada, y agrega la animación para el hada
	fairy = createSprite(400,375,10,10);
	fairy.addAnimation("fairy",fairyImg);
	fairy.scale = .2

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);
  if (keyDown(LEFT_ARROW)&&bandera===0){
	
	fairy.x = fairy.x -10
}
  if (keyDown(RIGHT_ARROW)&&bandera===0){
	fairy.x = fairy.x +10
  }
  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  //escribe aquí el código para detener la estrella en la mano del hada
  if (fairy.y<star.y){
	  Matter.Body.setStatic(starBody,true);
	  bandera = 1;
  }
  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}
}
