//This Project was made By ©Robert Bamba
//©Robert Bamba||2022

let dropDown = document.getElementById("menu_dropdown");
let navDropDownActive = document.getElementById("courses");
const navbar = document.getElementById("navbar");

dropDown.addEventListener("mouseenter", mouseEnter);
dropDown.addEventListener("mouseleave", mouseLeave);
navDropDownActive.addEventListener("mouseenter", mouseEnter);
navDropDownActive.addEventListener("mouseleave", mouseLeave);

function mouseEnter() {
  dropDown.classList.add("active");
  console.log("active");
}

function mouseLeave() {
  dropDown.classList.remove("active");
  console.log("deactive");
}

window.addEventListener("scroll", function () {
  i = 100;
  navbar.classList.toggle('sticky', window.scrollY > i);
});

let prevScrollpos = window.pageYOffset;

window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    navbar.classList.add("scrolldown");
    navbar.classList.remove("scrollup");
  } else {
    navbar.classList.remove("scrolldown");
    navbar.classList.add("scrollup");
  }
  prevScrollpos = currentScrollPos;

  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.height = scrolled + "%";
}
