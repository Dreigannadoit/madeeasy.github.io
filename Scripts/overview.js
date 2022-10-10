let swiper;

swiper = new Swiper(".s-courses-Swiper", {
  slidesPerView: 6,
  spaceBetween: 20,
  slidesPerGroup: 1,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

swiper = new Swiper(".s-register-courses-basic-Swiper", {
  slidesPerView: 2,
  spaceBetween: 20,
  slidesPerGroup: 1,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
});

swiper = new Swiper(".s-register-courses-advanced-Swiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  slidesPerGroup: 1,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
});

swiper = new Swiper(".prices-card", {
  slidesPerView: 2,
  spaceBetween: 60,
  slidesPerGroup: 1,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2100,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

swiper = new Swiper(".testimonialSwiper", {
  slidesPerView: 3,
  spaceBetween: 50,
  slidesPerGroup: 1,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2100,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// transition to different register cards - register page
const cardContainer = document.getElementById("register-courses");
const buttonContainer = document.getElementById("register-menu");

const basicButton = document.getElementById("r-m-b");
const intermediateButton = document.getElementById("r-m-i");
const advancedButton = document.getElementById("r-m-a");

const basicCard = document.getElementById("r-c-b");
const intermediateCard = document.getElementById("r-c-i");
const advancedCard = document.getElementById("r-c-a");

let possibleContent = [
  "Use the DRY (Don't Repeat Yourself) principle",
  "Did you know that you don't need to be good at math to be a coder.",
  "Write as few lines as possible.",
  "Use appropriate naming conventions.",
  "Don't use lengthy functions.",
  "Be sure to practice clear and concise comments.",
  "Always Test Your Code",
  "For Java Coders - public static void main(String[] args)"
];

basicButton.addEventListener("click", function (e) {
  e.preventDefault;

  cardContainer.classList.remove("animateTransition");

  void cardContainer.offsetWidth;

  cardContainer.classList.add("animateTransition");

  basicButton.classList.add("active");
  intermediateButton.classList.remove("active");
  advancedButton.classList.remove("active");

  basicCard.classList.remove("deactive");
  intermediateCard.classList.add("deactive");
  advancedCard.classList.add("deactive");

  possibleContent;
  let showContent = cardContainer.setAttribute('data-content', possibleContent[Math.floor(Math.random() * possibleContent.length)]);
}, false);

intermediateButton.addEventListener("click", function (e) {
  e.preventDefault;

  cardContainer.classList.remove("animateTransition");

  void cardContainer.offsetWidth;

  cardContainer.classList.add("animateTransition");

  basicButton.classList.remove("active");
  intermediateButton.classList.add("active");
  advancedButton.classList.remove("active");

  basicCard.classList.add("deactive");
  intermediateCard.classList.remove("deactive");
  advancedCard.classList.add("deactive");

  possibleContent;
  let showContent = cardContainer.setAttribute('data-content', possibleContent[Math.floor(Math.random() * possibleContent.length)]);
}, false);

advancedButton.addEventListener("click", function (e) {
  e.preventDefault;

  cardContainer.classList.remove("animateTransition");

  void cardContainer.offsetWidth;

  cardContainer.classList.add("animateTransition");

  basicButton.classList.remove("active");
  intermediateButton.classList.remove("active");
  advancedButton.classList.add("active");

  basicCard.classList.add("deactive");
  intermediateCard.classList.add("deactive");
  advancedCard.classList.remove("deactive");

  possibleContent;
  let showContent = cardContainer.setAttribute('data-content', possibleContent[Math.floor(Math.random() * possibleContent.length)]);
}, false);


// 3D ORBITING WORDS
const myTags = [
  'Unity', 'CSS', 'HTML',
  'C#', 'C++', 'Javascript',
  'Python', 'Java', 'Lua',
  'code.org', 'Node.js', 'Roblox',
  'Visual Studio Code', 'Thunkable',
  'blender',
];

var tagCloud = TagCloud('.orb-content', myTags, {
  radius: 350,
  maxSpeed: 'fast',
  initSpeed: 'fast',
  direction: 135,
  keep: true
});

const colors = ['#222228'];
var random_color = colors[Math.floor(Math.random() * colors.length)];
document.querySelector('.orb-content').style.color = random_color;



const itemOne = document.getElementById("box1");
document.getElementById("box1").addEventListener("click", activeBox1);
//...
const itemTwo = document.getElementById("box2");
document.getElementById("box2").addEventListener("click", activeBox2);
//...
const itemThree = document.getElementById("box3");
document.getElementById("box3").addEventListener("click", activeBox3);
//...
const itemFour = document.getElementById("box4");
document.getElementById("box4").addEventListener("click", activeBox4);
//...
const itemFive = document.getElementById("box5");
document.getElementById("box5").addEventListener("click", activeBox5);
//...
const itemSix = document.getElementById("box6");
document.getElementById("box6").addEventListener("click", activeBox6);
//...
const itemSeven = document.getElementById("box7");
document.getElementById("box7").addEventListener("click", activeBox7);
//...
const itemEight = document.getElementById("box8");
document.getElementById("box8").addEventListener("click", activeBox8);
//...
const itemNine = document.getElementById("box9");
document.getElementById("box9").addEventListener("click", activeBox9);
//...
const itemTen = document.getElementById("box10");
document.getElementById("box10").addEventListener("click", activeBox10);

//ACTIVATE Accordian
function activeBox1() {
  itemOne.classList.toggle("active");
  itemTwo.classList.remove("active");
  itemThree.classList.remove("active");
  itemFour.classList.remove("active");
  itemFive.classList.remove("active");
  itemSix.classList.remove("active");
  itemSeven.classList.remove("active");
  itemEight.classList.remove("active");
  itemNine.classList.remove("active");
  itemTen.classList.remove("active");
}
function activeBox2() {
  itemOne.classList.remove("active");
  itemTwo.classList.toggle("active");
  itemThree.classList.remove("active");
  itemFour.classList.remove("active");
  itemFive.classList.remove("active");
  itemSix.classList.remove("active");
  itemSeven.classList.remove("active");
  itemEight.classList.remove("active");
  itemNine.classList.remove("active");
  itemTen.classList.remove("active");
}
function activeBox3() {
  itemOne.classList.remove("active");
  itemTwo.classList.remove("active");
  itemThree.classList.toggle("active");
  itemFour.classList.remove("active");
  itemFive.classList.remove("active");
  itemSix.classList.remove("active");
  itemSeven.classList.remove("active");
  itemEight.classList.remove("active");
  itemNine.classList.remove("active");
  itemTen.classList.remove("active");
}
function activeBox4() {
  itemOne.classList.remove("active");
  itemTwo.classList.remove("active");
  itemThree.classList.remove("active");
  itemFour.classList.toggle("active");
  itemFive.classList.remove("active");
  itemSix.classList.remove("active");
  itemSeven.classList.remove("active");
  itemEight.classList.remove("active");
  itemNine.classList.remove("active");
  itemTen.classList.remove("active");
}
function activeBox5() {
  itemOne.classList.remove("active");
  itemTwo.classList.remove("active");
  itemThree.classList.remove("active");
  itemFour.classList.remove("active");
  itemFive.classList.toggle("active");
  itemSix.classList.remove("active");
  itemSeven.classList.remove("active");
  itemEight.classList.remove("active");
  itemNine.classList.remove("active");
  itemTen.classList.remove("active");
}
function activeBox6() {
  itemOne.classList.remove("active");
  itemTwo.classList.remove("active");
  itemThree.classList.remove("active");
  itemFour.classList.remove("active");
  itemFive.classList.remove("active");
  itemSix.classList.toggle("active");
  itemSeven.classList.remove("active");
  itemEight.classList.remove("active");
  itemNine.classList.remove("active");
  itemTen.classList.remove("active");
}
function activeBox7() {
  itemOne.classList.remove("active");
  itemTwo.classList.remove("active");
  itemThree.classList.remove("active");
  itemFour.classList.remove("active");
  itemFive.classList.remove("active");
  itemSix.classList.remove("active");
  itemSeven.classList.toggle("active");
  itemEight.classList.remove("active");
  itemNine.classList.remove("active");
  itemTen.classList.remove("active");
}
function activeBox8() {
  itemOne.classList.remove("active");
  itemTwo.classList.remove("active");
  itemThree.classList.remove("active");
  itemFour.classList.remove("active");
  itemFive.classList.remove("active");
  itemSix.classList.remove("active");
  itemSeven.classList.remove("active");
  itemEight.classList.toggle("active");
  itemNine.classList.remove("active");
  itemTen.classList.remove("active");
}
function activeBox9() {
  itemOne.classList.remove("active");
  itemTwo.classList.remove("active");
  itemThree.classList.remove("active");
  itemFour.classList.remove("active");
  itemFive.classList.remove("active");
  itemSix.classList.remove("active");
  itemSeven.classList.remove("active");
  itemEight.classList.remove("active");
  itemNine.classList.toggle("active");
  itemTen.classList.remove("active");
}
function activeBox10() {
  itemOne.classList.remove("active");
  itemTwo.classList.remove("active");
  itemThree.classList.remove("active");
  itemFour.classList.remove("active");
  itemFive.classList.remove("active");
  itemSix.classList.remove("active");
  itemSeven.classList.remove("active");
  itemEight.classList.remove("active");
  itemNine.classList.remove("active");
  itemTen.classList.toggle("active");
}