const images = ["media/portada.JPG","media/portada2.JPG", "media/portada3.jpg"]

const carousel = document.querySelector(".carousel");
const interval = setInterval(function(){
    startCarousel();

}, 3000)
var index = 1;

startCarousel = () => {
    carousel.getElementsByClassName.backgroundImage = `url(${images[index++]})`
    carousel.classList.remove("fade");
    void carousel.offsetWidth;
    carousel.classList.add("fade");
    if (index > images.length - 1) index = 0;
}