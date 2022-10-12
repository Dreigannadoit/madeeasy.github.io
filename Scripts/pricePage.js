// buttons
const rightButton = document.getElementById("buttonRight");
const leftButton = document.getElementById("buttonLeft");

const beginnerButton = document.getElementById("buttonBeginner");
const intermediateButton = document.getElementById("buttonIntermediate");
const advancedButton = document.getElementById("buttonAdvanced");

// Individual Plan Price containers
const cardContainer = document.getElementById("cardContainer");
const beginnerSection = document.getElementById("sectionBeginner");
const intermediateSection = document.getElementById("sectionIntermediate");
const advancedSection = document.getElementById("sectionAdvanced");

// Intro Sections
const individualIntro = document.getElementById("individualIntro");
const studentIntro = document.getElementById("studentIntro");

// price care section
const individualPriceContainer = document.getElementById("individualPriceContainer");
const studentPriceContainer = document.getElementById("studentPriceContainer");

rightButton.addEventListener("click", function (e) {
  e.preventDefault;

  individualIntro.classList.toggle("hidden");
  studentIntro.classList.toggle("hidden");
  individualPriceContainer.classList.toggle("hidden");
  studentPriceContainer.classList.toggle("hidden");

}, false);

leftButton.addEventListener("click", function (e) {
  e.preventDefault;

  individualIntro.classList.toggle("hidden");
  studentIntro.classList.toggle("hidden");
  individualPriceContainer.classList.toggle("hidden");
  studentPriceContainer.classList.toggle("hidden");

}, false);

// Individual Price Selection
beginnerButton.addEventListener("click", function (e) {
  e.preventDefault;

  cardContainer.classList.remove("animateTransition");

  void cardContainer.offsetWidth;

  cardContainer.classList.add("animateTransition");

  beginnerSection.classList.remove("hidden");
  intermediateSection.classList.add("hidden");
  advancedSection.classList.add("hidden");

}, false);
intermediateButton.addEventListener("click", function (e) {
  e.preventDefault;

  cardContainer.classList.remove("animateTransition");

  void cardContainer.offsetWidth;

  cardContainer.classList.add("animateTransition");

  beginnerSection.classList.add("hidden");
  intermediateSection.classList.remove("hidden");
  advancedSection.classList.add("hidden");

}, false);
advancedButton.addEventListener("click", function (e) {
  e.preventDefault;

  cardContainer.classList.remove("animateTransition");

  void cardContainer.offsetWidth;

  cardContainer.classList.add("animateTransition");

  beginnerSection.classList.add("hidden");
  intermediateSection.classList.add("hidden");
  advancedSection.classList.remove("hidden");

}, false);