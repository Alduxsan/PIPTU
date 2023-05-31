import { dataRequest } from "./data_source.js";

/* formated to match splide li elements */
function slidejsSlide(imgPath) {
  let li = document.createElement("li");
  let img = document.createElement("img");

  li.classList.add("splide__slide");
  li.style.backgroundImage = `url(${imgPath})`;
  //   img["id"] = "carouselImage";
  //   img["src"] = imgPath;
  //   li.appendChild(img);
  return li;
}
async function slidesProvider(reqId, hostID, slideElement) {
  const slidesContainer = document.getElementById(hostID);

  const fragment = new DocumentFragment();

  const data = await dataRequest(reqId);

  let urlList = JSON.parse(data);
  urlList.map((img) => {
    fragment.append(slideElement(img.url));
  });
  return slidesContainer.appendChild(fragment);
}

slidesProvider("homeSlider", "homeSlideContainer", slidejsSlide);
