const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13;
var block14,block15,block16,block17,block18,block19,block20,block21,block22,block23,block24,block25;


function setup(){
    createCanvas(800,700);
    engine = Engine.create();
    world = engine.world;

    ground=new Ground(450,390,900,20);

    //pyramid1
    //level1
    block1=new Block(300,275,30,40);
    block2=new Block(330,275,30,40);
    block3=new Block(360,275,30,40);
    block4=new Block(390,275,30,40);
    block5=new Block(420,275,30,40);
    block6=new Block(450,275,30,40);
    block7=new Block(470,275,30,40);

    //level two
    block8=new Block(330,235,30,40);
    block9=new Block(360,235,30,40);
    block10=new Block(390,235,30,40);
    block11=new Block(420,235,30,40);
    block12=new Block(450,235,30,40);

    //level three
    block13=new Block(360,195,30,40);
    block14=new Block(390,195,30,40);
    block15=new Block(420,195,30,40);

    //top
    block16=new Block(390,155,30,40);

      //pyramid2
    //level1
    block17=new Block(580,225,30,40);
    block18=new Block(610,225,30,40);
    block19=new Block(640,225,30,40);
    block20=new Block(670,225,30,40);
    block21=new Block(700,225,30,40);

    //level2
    block22=new Block(610,195,30,40);
    block23=new Block(640,195,30,40);
    block24=new Block(670,195,30,40);

    //top
    block25=new Block(640,165,30,40);

Engine.run(engine);                           
  
}

function draw(){
    background("brown");
    Engine.update(engine);
    text(mouseX + ',' + mouseY, 30, 45);

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    fill("skyblue");
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    fill("pink");
    block13.display();
    block14.display();
    block15.display();
    fill("green");
    block16.display();
    fill("grey");
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    fill("skyblue");
    block22.display();
    block23.display();
    block24.display();
    fill("green");
    block25.display();
    fill("pink");
    ground.display();



}
