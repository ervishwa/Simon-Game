let userClickedPattern = new Array();
let gamePattern = new Array();
let buttonColours = [ "red", "blue", "green", "yellow"] ;

function nextSequence() {
    userClickedPattern = [];
    level++;
    $("h1").text("Level"+" "+level);
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);

}
$(".btn").click(function(){
     var userChosenColour = this.id;
     userClickedPattern.push(userChosenColour);
     playSound(userChosenColour);
     animatePress(userChosenColour);
     checkAnswer(userClickedPattern.length-1);
    
     
})

function playSound(name){
    var audio = new Audio("sounds/"+name+".mp3");
    audio.play();
}
function animatePress(currentColour){
$("#"+currentColour).addClass("pressed");
setTimeout(()=>{
    $("#"+currentColour).removeClass("pressed");
},100)
}
var timepass = 0;
var level = 0;
$(document).keypress(function(){
   if(timepass==0){
   
    $("h1").text("Level"+" "+level);
    
    
    nextSequence();
    timepass++;
   }
})

function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

      
      if (userClickedPattern.length === gamePattern.length){

        
        setTimeout(function () {
          nextSequence();
        }, 1000);

      }

    } else {

      let audio = new Audio("sounds/"+"wrong"+".mp3");
      audio.play();
      $("body").addClass("game-over");
      $("h1").text("Game Over, Press Any Key to Restart");
      setTimeout(()=>{
      $("body").removeClass("game-over");
      },1000)
      startover();

    }

}
function startover(){
   level = 0;
   timepass = 0;
   gamePattern = [];

}











