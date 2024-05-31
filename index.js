var drumButtons = document.getElementsByClassName("drum");
for (var i = 0; i < drumButtons.length; i++) {
  drumButtons[i].addEventListener("click", function(event) {
    SoundMaker(event.target.innerHTML);
    ButtonAnimation(event.target.innerHTML);
}
  );
}

document.addEventListener("keydown", function(event){
    SoundMaker(event.key);
    ButtonAnimation(event.key);
});

function SoundMaker(trigger) {
  switch (trigger) {
    case "a":
      var tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;
    case "s":
      var tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;
    case "d":
      var tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;
    case "f":
      var tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;
    case "g":
      var snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;
    case "h":
      var kickbass = new Audio("./sounds/kick-bass.mp3");
      kickbass.play();
      break;
    case "j":
        var crash = new Audio("./sounds/crash.mp3");
        crash.play();
        break;
    default:
        console.log(trigger)
      break;
  }
}

function ButtonAnimation(buttonKey){
    var activeButton = document.querySelector("."+ buttonKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
      activeButton.classList.remove("pressed");
    }, 120);
    
}