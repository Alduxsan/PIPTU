//carousel in home
const images = [
  "https://i.ibb.co/rcj9YHF/1.jpg",
  "https://i.ibb.co/XbXMSvh/2.jpg",
  "https://i.ibb.co/17J5KYS/4.jpg",
  "https://i.ibb.co/tBNT1Lp/5.jpg",
  "https://i.ibb.co/rbVXGZy/6.jpg",
  "https://i.ibb.co/zGP56ST/7.jpg",
];

const carousel = document.querySelector(".carousel");
const interval = setInterval(function () {
  startCarousel();
}, 10000);
var index = 1;

function startCarousel() {
  carousel.classList.remove("fade");
  void carousel.offsetWidth;
  carousel.classList.add("fade");
  document.getElementById("carouselImage").src = `${images[index++]}`;

  if (index > images.length - 1) index = 0;
}
