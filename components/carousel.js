import { dataRequest } from "../js/data_source.js";

class Carousel extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  getAtt(attr) {
    let attribute = (this.attribute = this.getAttribute(attr));
    return attribute;
  }

  connectedCallback() {
    this.render();
    this.slidesProvider("homeSlider", "slidesContainer");
  }

  disconnectedCallback() {
    //implementation
  }

  attributeChangedCallback(name, oldVal, newVal) {
    //implementation
  }

  adoptedCallback() {
    //implementation
  }

  slideAssembler(imgPath) {
    let img = document.createElement("img");
    img.classList.add("mySlides");
    img["src"] = imgPath;
    img.style.width = "100%";

    return img;
  }
  async slidesProvider(id, hostID) {
    const slidesContainer = this.shadowRoot.getElementById(hostID);

    const fragment = new DocumentFragment();
    const data = await dataRequest(id);

    let urlList = JSON.parse(data);
    urlList.map((img) => {
      fragment.append(this.slideAssembler(img.url));
    });
    return slidesContainer.appendChild(fragment);
  }

  render() {
    this.shadowRoot.innerHTML = `
    <div id="slidesContainer" class="w3-content w3-section" style="max-width:500px">
  
</div>
    `;
  }
}

window.customElements.define("home-carousel", Carousel);
