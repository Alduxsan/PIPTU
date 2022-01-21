import "./components/Navbar.js";
import "./components/Profiles.js";
import "./components/SubContent.js";
import "./components/artifacts3d.js"

var navbar = document.getElementById("navbar");
var sticky =navbar.offsetTop;

window.onscroll = function() {setSticky()};

function setSticky() {
  if (window.scrollY > sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}