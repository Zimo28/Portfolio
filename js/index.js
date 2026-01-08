// Typewriter effect
const words = ["Hazim", "Student", "Programmer", "Developer", "Designer", "Event Crew"];
const typedText = document.querySelector(".typed-text");

if (typedText) {
  let wordIndex = 0;
  let letterIndex = 0;
  let currentWord = "";
  let isDeleting = false;
  let speed = 150;

  function type() {
    currentWord = words[wordIndex];

    typedText.textContent = isDeleting
      ? currentWord.substring(0, letterIndex--)
      : currentWord.substring(0, letterIndex++);

    if (!isDeleting && letterIndex > currentWord.length) {
      isDeleting = true;
      speed = 1000;
    } else if (isDeleting && letterIndex < 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      speed = 200;
    } else {
      speed = isDeleting ? 100 : 150;
    }

    setTimeout(type, speed);
  }

  type();
}


// Audio Level
document.getElementById("audio").volume = 0.4;
