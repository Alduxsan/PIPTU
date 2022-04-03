import { Collection_container_css } from "../css/css_components.js";

class Collection_container extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return Collection_container_css;
  }

  display_more() {
    document.getElementById("gallery_id").classList.toggle("collapsed");

    let toggler = document.getElementById("toggler_img");
    toggler.classList.toggle("less");
  }

  getAtt(attr) {
    let attribute = (this.attribute = this.getAttribute(attr) ?? "none");
    return attribute;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    let imgPath = this.getAtt("imgPath");
    let text = this.getAtt("text");
    let size = this.getAtt("size");

    this.shadowRoot.innerHTML = `
    <div class="collection_wrapper2">
        <div class="container2 collapsed2" id="gallery_id2">
          <slot></slot>
      </div>

      <div class="toggler_button2" type="button2">
        <img class="" id="toggler_img2" src="./media/icons/bottom-arrow-angle.png" alt="toggler icon">
      </div>

    </div>

    <style>

    </style>
    `;
  }
}

customElements.define("collection-container", Collection_container);

class Photo_item extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return Collection_container_css;
  }

  getAtt(attr) {
    let attribute = (this.attribute = this.getAttribute(attr) ?? "none");
    return attribute;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    let imgPath = this.getAtt("imgPath");
    let text = this.getAtt("text");
    let size = this.getAtt("size");

    this.shadowRoot.innerHTML = `
    <div class="gallery-container ${size}">
       <div class="gallery-item">
         <div class="image">
           <img src="${imgPath}" alt="${text}">
         </div>
         <div class="text">${text}</div>
       </div>
    </div>

    <style>
    
    .gallery-container{
      width: 100%;
      height: 100%;
      overflow: hidden;
      border-radius: 4px;
    }

    .gallery-item {
      width: 100%;
      height: 100%;
      position: relative;
      background: no-repeat url("/media/icons/photo_loading.png");
      background-size: 50%;
      background-position: center;
    }

    .gallery-item .image {
      width: 100%;
      height: 100%;
      overflow: hidden;
      border-radius: 4px;
    }

    .image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: 50% 50%;
      cursor: pointer;
      transition: 0.5s ease-in-out;
    }

    .gallery-item:hover .image img {
      transform: scale(1.5);
    }
    
    .gallery-item .text {
      opacity: 0;
      position: absolute;
      bottom: 10%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #fff;
      font-size: 25px;
      pointer-events: none;
      z-index: 4;
      transition: 0.3s ease-in-out;
      -webkit-backdrop-filter: blur(5px) saturate(1.8);
      backdrop-filter: blur(5px) saturate(1.8);
      text-align: center;
    }
    
    .gallery-item:hover .text {
      opacity: 1;
      animation: move-down 0.3s linear;
      padding: 1em;
      width: 100%;
    }

    .w-1 {
      grid-column: span 1;
    }
    .w-2 {
      grid-column: span 2;
    }
    </style>
    `;
  }
}

customElements.define("photo-item", Photo_item);
