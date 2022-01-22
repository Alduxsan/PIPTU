import "./components/Navbar.js";
import "./components/Profiles.js";
import "./components/SubContent.js";
import "./components/artifacts3d.js"

var navbar = document.getElementById("navbar");
var general = document.getElementById("general");
var sticky =300;

window.onscroll = function() {setSticky()};

function setSticky() {
  if (window.scrollY > sticky) {
    navbar.classList.add("sticky")
    general.classList.add("styckyActive")
  } else {
    navbar.classList.remove("sticky");
    general.classList.remove("styckyActive");
}}