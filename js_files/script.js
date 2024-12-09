//background music play
const audio = document.getElementById('background-audio');
const toggleButton = document.getElementById('audio-toggle');
const startButton = document.getElementById('start-button');

toggleButton.addEventListener('click', () => {
  if (audio.muted) {
    audio.muted = false;
    toggleButton.textContent = '🔊'; // start
  } else {
    audio.muted = true;
    toggleButton.textContent = '🔇'; // mute
  }
});
startButton.addEventListener('click', () => {
  // play the audio
  audio.play().then(() => {
    console.log("Audio is now playing.");
  }).catch(error => {
    console.error("Failed to play the audio:", error);
  });
  startButton.style.display = 'none';
});



// Intro page animation
const introPage = document.getElementById('intro-page');
const mainContent = document.getElementById('main-content');


startButton.addEventListener('click', () => {
  introPage.classList.add('hidden');

  // Wait for the animation to finish before displaying the main content
  setTimeout(() => {
    introPage.style.display = 'none'; // Fully hide the intro page
    mainContent.style.display = 'block'; // Show the main content
  }, 1000); // Match the transition duration in CSS
});




// -------------Reference: https://codepen.io/alig01/pen/WNLGogV---------
console.clear();
const content = document.querySelector(".content");
const link = document.querySelector("a");
const linkIcon = document.querySelector(".btn-icon");
let linkAnimated = false;

let xTo = gsap.quickTo(".hidden-content", "--x", {
  duration: 0.4,
  ease: "power4.out"
}),
  yTo = gsap.quickTo(".hidden-content", "--y", {
    duration: 0.4,
    ease: "power4.out"
  });

let tl = gsap.timeline({ paused: true });
tl.to(".hidden-content", {
  "--size": 250,
  duration: 0.75,
  ease: "back.out(1.7)"
});

let hoveringContent = gsap.utils.toArray("p", content);

hoveringContent.forEach((el) => {
  el.addEventListener("mouseenter", () => {
    tl.restart();
  });
  el.addEventListener("mouseleave", () => {
    tl.reverse();
  });
});



/***************************************
    Add Mask on First Mouse Movement
***************************************/
window.addEventListener("mousemove", onFirstMove);

function onFirstMove(e) {
  window.removeEventListener("mousemove", onFirstMove);
  gsap.set(".hidden-content", { autoAlpha: 1, "--x": e.pageX, "--y": e.pageY });

  window.addEventListener("mousemove", (e) => {
    // if (!linkAnimated) {
    //   yTo(e.pageY);
    //   xTo(e.pageX);
    // }
    if (!linkAnimated) {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

      const adjustedX = e.pageX - scrollLeft;
      const adjustedY = e.pageY - scrollTop;

      yTo(adjustedY);
      xTo(adjustedX);
    }
  });
}

/***************************************
      Only for the preview image
***************************************/
gsap.set(".hidden-content", {
  autoAlpha: 1,
  "--x": window.innerWidth / 3,
  "--y": window.innerHeight / 2
});
tl.progress(0.2);



window.addEventListener('scroll', () => {
  const introSection = document.querySelector('.self-intro');
  const maxScroll = 700; 
  const currentScroll = window.scrollY;

  
  const opacity = Math.max(0, 1 - currentScroll / maxScroll);

  
  introSection.style.opacity = opacity;
});


// contact animation
var eightCart = document.getElementById('rotate'); 

var eightCartTop = eightCart.offsetTop; 

window.onscroll = function (e) {
  var bar = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
  var winH = window.innerHeight - 160; 

  
  if (bar >= eightCartTop - winH) {
    eightCart.style.animation = "rotate 1s ease-out 1"; 
    eightCart.style.opacity = 1; 
  } else {
    eightCart.style.animation = ""; 
    eightCart.style.opacity = 0; 
  }
}


const icons = document.querySelectorAll('.contact_icon .phone, .contact_icon .email, .contact_icon .wechat');
const infoDiv = document.getElementById('info');
const infoContent = document.getElementById('info-content');


icons.forEach(icon => {
  icon.addEventListener('click', function (event) {
    event.preventDefault(); 

    
    const contentType = this.getAttribute('data-content');

    
    switch (contentType) {
      case 'phone':
        infoContent.innerHTML = `
        <p class="info-title">Phone Number:</p>
        <p class="info-detail">(+86) 133-7200-5894</p>
    `;
        break;
      case 'email':
        infoContent.innerHTML = `
        <p class="info-title">Email:</p>
        <p class="info-detail">wenqingpanlucy@gmail.com</p>
    `;
        break;
      case 'wechat':
        infoContent.innerHTML = `
        <p class="info-title">Wechat Account:</p>
        <p class="info-detail">panwenqingLucy</p>
    `;
        break;
      default:
        infoContent.textContent = "Please Choose an Icon";
    }

   
    infoDiv.style.display = 'block';
  });
});



