var cat,mouse,bg
function preload() {
    //load the images here
    bg=loadImage("./images/garden.png");
    cat_running=loadAnimation("images/cat2.png","images/cat3.png")
     cat_sleeping=loadImage("images/cat1.png")
    cat_standing=loadAnimation("images/cat4.png")
    mouse_standing=loadImage("images/mouse1.png")
     mouse_clapping=loadAnimation("images/mouse2.png","images/mouse3.png")
     mouse_checking=loadAnimation("images/mouse4.png")
     //mouse_IMG4=loadImage("mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
mouse=createSprite(100,500,0,0)
cat=createSprite(600,500,0,0)
cat.addImage(cat_sleeping);
cat.scale=0.1;
cat.addAnimation("running",cat_running)
cat.addAnimation("standing", cat_standing)
mouse.addImage(mouse_standing);
mouse.scale=0.1;
mouse.addAnimation("clapping",mouse_clapping)
mouse.addAnimation("checking",mouse_checking)
background(bg);
}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.collide(mouse)){
        mouse.changeImage("checking")
       cat.changeImage("standing")
    }

    /*if(keyCode===LEFT_ARROW){
        cat.velocity.x=-5
        cat.addAnimation("running",cat_running)
        // cat.changeImage(cat_standing)
        mouse.addAnimation("clapping",mouse_clapping)
         //mouse.changeImage(mouse_checking)
    }*/
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

if(keyCode===LEFT_ARROW){
    cat.velocity.x=-5
    cat.changeImage("running");
    mouse.changeImage("clapping")
}
}
