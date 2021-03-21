

var balloon;
var database;
var balloonPosition;
var scenery;
var balloonImage;
var ground;

function preload(){

scenery = loadImage("HotAirBallon-01.png")
balloonImage = loadImage("HotAirBallon-02.png")

}

function setup(){
    createCanvas(1400,660);   
   
    
    database = firebase.database()
    balloon = createSprite(114,364,10,10);
    ground = createSprite(76,625,1400,5)
    balloon.addImage(balloonImage)
    var balloonPosition = database.ref('balloon/position')
    balloonPosition.on("value",read)
    balloon.shapeColor = "red";


}

function draw(){
    background(scenery);
    ground.display();
     console.log("X: " + mouseX)
    console.log("Y: " + mouseY)

        if(keyDown(LEFT_ARROW)){
        balloon.position.x = balloon.position.x + -3
    }
    else if(keyDown(RIGHT_ARROW)){
        balloon.position.x = balloon.position.x + 3
    }
    else if(keyDown(UP_ARROW)){
        balloon.position.y = balloon.position.y + -3
    }
    else if(keyDown(DOWN_ARROW)){
        balloon.position.y = balloon.position.y + 3
    }
    drawSprites();
}

function read (data){
position = data.val()
balloon.x = position.x
balloon.y = position.y
}

function write (x,y){
database.ref('balloon/position').set({
x: position.x+x,
y: position.y+y
})

}