const navbar = document.getElementById("navbar");


prevScrollpos = window.pageYOffset;
var i = 50;

window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;

  if (window.scrollY > i) {
    navbar.classList.add('sticky');

    if (prevScrollpos > currentScrollPos) {
      navbar.style.top = "0%";
    }

    else {
      navbar.style.top = "-50%";
    }
  }

  else {
    navbar.classList.remove('sticky');
  }

  prevScrollpos = currentScrollPos;
}
