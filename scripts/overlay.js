const logoSlides = [{
    "name": "LimeWire Redesign",
    "src": "../assets/slides/branding/Limewire.png"
  },
  {
    "name": "Etsy Redesign",
    "src": "../assets/slides/branding/Etsy.png"
  },
  {
    "name": "HippoPop Brand",
    "src": "../assets/slides/branding/HippoPop.png"
  },
  {
    "name": "SocialDrip Brand",
    "src": "../assets/slides/branding/SocialDrip.png"
  },
  {
    "name": "Homebrew Hub Logo",
    "src": "../assets/slides/branding/HomebrewHub.png"
  }
]

const advertisingSlides = [{
    "name": "HippoPop Advertisment",
    "src": "../assets/slides/advertising/HippoPop.png"
  },
  {
    "name": "SocialDrip Advertisment",
    "src": "../assets/slides/advertising/SocialDrip.jpg"
  },
  {
    "name": "CV-TEC Fall Family Night",
    "src": "../assets/slides/advertising/FallFamilyNight.jpg"
  }
]

var ca;
var ci;

const overlay = document.getElementById('overlay');
const counter = document.getElementById('counter');
const name = document.getElementById('overlayName');
const img = document.getElementById('overlayImg');

function loadSlideshow(array) {
  let dot = document.createElement('div');

  while (counter.firstChild) {
    counter.removeChild(counter.firstChild);
  }

  var insert = "";

  for (i = 0; i < array.length; i++) {
    insert = insert + `<div class="counterDot" id="dot${i}"></div> `;
  }

  counter.innerHTML = insert;

  counter.firstChild.className = "counterDot activeDot"

  img.src = array[0].src;
  img.alt = array[0].name;
  name.innerHTML = array[0].name;

  ca = array;
  ci = 0;

  overlay.style.animation = "fade 0.1s linear";
  overlay.style.display = "block";
}

function nextSlide() {

  document.getElementById("dot" + ci).className = "counterDot";

  if (ca.length == ci + 1) {
    ci = 0;
  } else {
    ci++;
  }

  document.getElementById("dot" + ci).className = "counterDot activeDot";

  img.src = ca[ci].src;
  img.alt = ca[ci].name;
  name.innerHTML = ca[ci].name;
}

function prevSlide() {

  document.getElementById("dot" + ci).className = "counterDot";

  if (-1 == ci - 1) {
    ci = ca.length - 1;
  } else {
    ci--;
  }

  document.getElementById("dot" + ci).className = "counterDot activeDot";

  img.src = ca[ci].src;
  img.alt = ca[ci].name;
  name.innerHTML = ca[ci].name;
}

function closeOverlay() {
  overlay.style.animation = "none";
  overlay.style.display = "none";
}

function openImg() {
  var a = document.createElement('a');
  a.href = ca[ci].src;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

document.onkeydown = function(evt) {
  evt = evt || window.event;
  var isEscape = false;
  if ("key" in evt) {
    isEscape = (evt.key === "Escape" || evt.key === "Esc");
  } else {
    isEscape = (evt.keyCode === 27);
  }
  if (isEscape) {
    closeOverlay();
  }
};
