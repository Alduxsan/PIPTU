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