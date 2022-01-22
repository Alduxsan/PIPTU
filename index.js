import "./components/Navbar.js";
import "./components/Profiles.js";
import "./components/SubContent.js";
import "./components/artifacts3d.js"

var navbar = document.getElementById("navbar");
var corrector = document.getElementById("corrector");
var sticky =500;

window.onscroll = function() {setSticky()};

function setSticky() {
  if (window.scrollY > sticky) {
    navbar.classList.add("sticky")
    corrector.classList.add("styckyActive")
  } else {
    navbar.classList.remove("sticky");
    corrector.classList.remove("styckyActive");
}}