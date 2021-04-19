var database;

var gameState = 0;
var playerCount = 0;
var game, form, player;

function setup(){
    createCanvas(500,500);

    database = firebase.database();

}

function draw(){
    background("white");

    drawSprites();
}