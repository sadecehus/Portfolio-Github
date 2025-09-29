var noOfButton = document.getElementsByTagName("button").length;
var tom1 = new Audio("sounds/tom-1.mp3");
var tom2 = new Audio("sounds/tom-2.mp3");
var tom3 = new Audio("sounds/tom-3.mp3");
var tom4 = new Audio("sounds/tom-4.mp3");
var snare = new Audio("sounds/snare.mp3");
var crash = new Audio("sounds/crash.mp3");
var kick = new Audio("sounds/kick-bass.mp3");

// Function to play sound based on key
function makeSound(key) {
  switch (key) {
    case "w":
      crash.play();
      break;
    case "a":
      kick.play();
      break;
    case "s":
      snare.play();
      break;
    case "d":
      tom1.play();
      break;
    case "j":
      tom2.play();
      break;
    case "k":
      tom3.play();
      break;
    case "l":
      tom4.play();
      break;
    default:
      break;
  }
}

// Button click events
for (var i = 0; i < noOfButton; i++) {
  document.getElementsByTagName("button")[i].addEventListener("click", function(){
    var pressedButton = this.innerHTML;
    makeSound(pressedButton);
  });
}

// Keyboard events
document.addEventListener("keydown", function(event) {
  makeSound(event.key);
});

//this.innerhtml öğenin içi