import "./components/Navbar.js";
import "./components/Profiles.js";
import "./components/SubContent.js";
import "./components/artifacts3d.js";
import "./components/ProjectListItem.js";
import "./components/FaunaItem.js";
import "./components/Subtitle.js"
import "./components/Title.js"
import "./components/SubNavbarContainer.js"
import "./components/SubNavbarItem.js"
import "./components/BookItem.js"
import "./components/PressItem.js"

window.onscroll = function () {
  setSticky();
};

function setSticky() {
  let navbar = document.getElementById("navbar");
  let general = document.getElementById("general");
  let sticky = 300;
  if (window.scrollY > sticky) {
    navbar.classList.add("sticky");
    general.classList.add("styckyActive");
  } else {
    navbar.classList.remove("sticky");
    general.classList.remove("styckyActive");
  }
}


