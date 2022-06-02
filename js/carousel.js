//carousel in home
const images = [
  "../media/home/carousel/1.jpg",
  "../media/home/carousel/2.jpg",
  "../media/home/carousel/4.jpg",
  "../media/home/carousel/5.jpg",
  "../media/home/carousel/6.jpg",
  "../media/home/carousel/7.jpg",
];

const carousel = document.querySelector(".carousel");
const interval = setInterval(function () {
  startCarousel();
}, 10000);
var index = 1;

function startCarousel() {
  carousel.classList.remove("fade");
  carousel.classList.add("fade");
  document.getElementById("carouselImage").src = `${images[index++]}`;

  if (index > images.length - 1) index = 0;
}
