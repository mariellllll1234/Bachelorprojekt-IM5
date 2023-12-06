console.log("hallo"); 

document.addEventListener('DOMContentLoaded', function() {
    const originalText = "Wie wirkt sich der Konsum auf Rezipient:innen aus?";
    let textToWrite = originalText;
    const typewriterElement = document.getElementById('typewriter-zuschauer');

    function type() {
      if (textToWrite.length > 0) {
        typewriterElement.innerHTML += textToWrite.charAt(0);
        textToWrite = textToWrite.substring(1);
        setTimeout(type, 50);
      }
    }

    type();
  });

  document.addEventListener('DOMContentLoaded', function() {
    const originalText = "So viele Formate: Welche Show gefällt mir?";
    let textToWrite = originalText;
    const typewriterElement = document.getElementById('typewriter-shows');

    function type() {
      if (textToWrite.length > 0) {
        typewriterElement.innerHTML += textToWrite.charAt(0);
        textToWrite = textToWrite.substring(1);
        setTimeout(type, 50);
      }
    }

    type();
  });

////////// animation einblendung texte auf indexseite

document.addEventListener("DOMContentLoaded", function () {
  var options = {
      root: null, 
      rootMargin: "0px",
      threshold: 0.3, 
  };

  var observer = new IntersectionObserver(handleIntersect, options);
  var textSections = document.querySelectorAll(".text-section");

  textSections.forEach(function (section) {
      observer.observe(section);
  });

  function handleIntersect(entries, observer) {
      entries.forEach(function (entry) {
          if (entry.isIntersecting) {
              entry.target.classList.add("show");
          } else {
              entry.target.classList.remove("show");
          }
      });
  }
}); 

/// spiralen animation

const canvas = document.getElementById("cw");
const context = canvas.getContext("2d");
context.globalAlpha = 0.5;

const cursor = {
  x: innerWidth / 2,
  y: innerHeight / 2,
};

let particlesArray = [];

generateParticles(101);
setSize();
anim();

addEventListener("mousemove", (e) => {
  cursor.x = e.clientX;
  cursor.y = e.clientY;
});

addEventListener(
  "touchmove",
  (e) => {
    e.preventDefault();
    cursor.x = e.touches[0].clientX;
    cursor.y = e.touches[0].clientY;
  },
  { passive: false },
);

addEventListener("resize", () => setSize());

function generateParticles(amount) {
  for (let i = 0; i < amount; i++) {
    particlesArray[i] = new Particle(
      innerWidth / 2,
      innerHeight / 2,
      4,
      generateColor(),
      0.02,
    );
  }
}

function generateColor() {
  let hexSet = "0123456789ABCDEF";
  let finalHexString = "#";
  for (let i = 0; i < 6; i++) {
    finalHexString += hexSet[Math.ceil(Math.random() * 15)];
  }
  return finalHexString;
}

function setSize() {
  canvas.height = innerHeight;
  canvas.width = innerWidth;
}

function Particle(x, y, particleTrailWidth, strokeColor, rotateSpeed) {
  this.x = x;
  this.y = y;
  this.particleTrailWidth = particleTrailWidth;
  this.strokeColor = strokeColor;
  this.theta = Math.random() * Math.PI * 2;
  this.rotateSpeed = rotateSpeed;
  this.t = Math.random() * 150;

  this.rotate = () => {
    const ls = {
      x: this.x,
      y: this.y,
    };
    this.theta += this.rotateSpeed;
    this.x = cursor.x + Math.cos(this.theta) * this.t;
    this.y = cursor.y + Math.sin(this.theta) * this.t;
    context.beginPath();
    context.lineWidth = this.particleTrailWidth;
    context.strokeStyle = this.strokeColor;
    context.moveTo(ls.x, ls.y);
    context.lineTo(this.x, this.y);
    context.stroke();
  };
}

function anim() {
  requestAnimationFrame(anim);

  context.fillStyle = "rgba(0,0,0,0.05)";

  context.fillRect(0, 0, canvas.width, canvas.height);

  particlesArray.forEach((particle) => particle.rotate());
};


console.log("bye");