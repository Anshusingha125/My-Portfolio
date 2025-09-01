const typedText = document.getElementById("typed-text");
const cursor = document.querySelector(".cursor");

const skills = [
  "Web Development",
  "CSS Animation",
  "JavaScript",
  "React.js",
  "App Development",
  "Flutter",
  "Visual Basic",
  "Git & GitHub"
];

let skillIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const current = skills[skillIndex];
  const displayed = current.substring(0, charIndex);

  typedText.textContent = displayed;

  if (!isDeleting && charIndex < current.length) {
    charIndex++;
    setTimeout(typeEffect, 100);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(typeEffect, 50);
  } else {
    if (!isDeleting) {
      isDeleting = true;
      setTimeout(typeEffect, 1000);
    } else {
      isDeleting = false;
      skillIndex = (skillIndex + 1) % skills.length;
      setTimeout(typeEffect, 400);
    }
  }
}


window.onscroll = function() {
  const btn = document.getElementById("scrollToTopBtn");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

document.getElementById("scrollToTopBtn").onclick = function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

document.addEventListener("DOMContentLoaded", typeEffect);
