const sound = document.createElement('audio');
sound.style.display = 'none';
document.body.appendChild(sound);

let arrayofnoises = ["sfx/bird.mp3", "sfx/buffalo.mp3", "sfx/cat1.mp3", "sfx/cat2.mp3", "sfx/elephant1.mp3", "sfx/elephant2.mp3", "sfx/penguin.mp3", "sfx/rooster.mp3", "sfx/tiger.mp3"];

function wonkySound() {
  let random = Math.floor(Math.random() * arrayofnoises.length);
  sound.src = arrayofnoises[random];

  sound.currentTime = 0;
  sound.play();
}

const links = document.querySelectorAll('a');
links.forEach(a => a.addEventListener('click', wonkySound));

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', wonkySound));

document.addEventListener('keyup', wonkySound);
