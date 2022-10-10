var countDownDate = new Date("Oct 30, 2022 12:00:00").getTime();

var x = setInterval(function () {

  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hr").innerHTML = hours;
  document.getElementById("min").innerHTML = minutes;
  document.getElementById("sec").innerHTML = seconds;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("days").innerHTML = "DEMO";
    document.getElementById("hr").innerHTML = "HAS";
    document.getElementById("min").innerHTML = "BEEN";
    document.getElementById("sec").innerHTML = "GRADED";
  }
}, 1000);

const eventName = document.getElementById("eventName");
eventName.innerHTML = "Halloween"

const pop = document.createElement('span');
pop.innerHTML = "30% SALE";

eventName.appendChild(pop);