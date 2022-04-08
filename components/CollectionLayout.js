class CollectionLayout extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  handleEvent(event) {
    console.log(event);
    if (event.type === "click") this.display_more();
  }

  display_more() {
    let btn = this.shadowRoot.getElementById("toggler_img");

    this.shadowRoot.getElementById("gallery_id").classList.toggle("expanded"); //expand the grid container
    btn.classList.toggle("less"); //to rotate the arrow

    if (!btn.classList.contains("less")) {
      document.getElementById("title").scrollIntoView(true);
    }
  }

  getAtt(attr) {
    let attribute = (this.attribute = this.getAttribute(attr) ?? "none");
    return attribute;
  }

  connectedCallback() {
    this.render();
    this.btn = this.shadowRoot.getElementById("btn");
    this.btn.addEventListener("click", this);
  }

  render() {
    this.shadowRoot.innerHTML = `
    <div class="collection_wrapper">
        <div class="container" id="gallery_id">
          <slot></slot>
      </div>

      <div id="btn" class="toggler_button" type="button">
        <img class="" id="toggler_img" src="./media/icons/bottom-arrow-angle.png" alt="toggler icon">
      </div>

    </div>

    <style>

    .collection_wrapper {
      background-color: rgba(38, 14, 0, 0.578);
      height: fit-content;
      padding: 2em;
      box-shadow: 0px 5px 4px;
    }
    
    .container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      grid-auto-rows: 400px 200px;
      grid-gap: 10px;
      grid-auto-flow: dense;

      height: 410px;
      overflow: hidden;
      filter: grayscale();
    }
    
    .expanded {
      animation: expand 1s;
      animation-fill-mode: forwards;
      filter: none;
    }
    
    .toggler_button {
      width: 50px;
      margin: auto;
      margin-top: 20px;
    }
    
    #toggler_img {
      width: 100%;
      border-radius: 4px;
      cursor: pointer;
      padding: 10px;
      background-color: rgba(255, 255, 255, 0.644);
      transition: all 0.2s;
      box-shadow: 4px 4px 2px rgba(0, 0, 0, 0.604);
    }
    
    #toggler_img:hover {
      box-shadow: 8px 8px 2px rgba(0, 0, 0, 0.304);
    }

    .less {
      transform: rotate(180deg);
    }
    

    ::slotted(.w-2){
      grid-column: span 2
    }
    ::slotted(.w-2) {
      grid-column: span 2;
    }
    ::slotted(.w-3) {
      grid-column: span 3;
    }
    ::slotted(.w-4) {
      grid-column: span 4;
    }
    ::slotted(.w-5) {
      grid-column: span 5;
    }
    ::slotted(.w-6) {
      grid-column: span 6;
    }
    
    ::slotted(.h-1) {
      grid-row: span 1;
    }
    ::slotted(.h-2) {
      grid-row: span 2;
    }
    ::slotted(.h-3) {
      grid-row: span 3;
    }
    ::slotted(.h-4) {
      grid-row: span 4;
    }
    ::slotted(.h-5) {
      grid-row: span 5;
    }
    ::slotted(.h-6) {
      grid-row: span 6;
    }


    @keyframes expand {
      0%{
        height: 400px
      }
      50%{
        height: 600px
      }
      100% {
        height:auto;
      }
    }
    </style>
    `;
  }
}

customElements.define("collection-layout", CollectionLayout);

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

    this.shadowRoot.innerHTML = `
    <div class="gallery-container">
       <div class="gallery-item">
         <div class="image">
          <a target="_blank" href="${imgPath}"> 
            <img src="${imgPath}" alt="${text}">
          </a>
         </div>
         <div class="text">${text}</div>
       </div>
    </div>

    <style>

    :host{
      border-radius: 4px
    }

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
      background-size: 30%;
      border-radius: 4px;
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
      border-radius: 4px;
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

    </style>
    `;
  }
}

customElements.define("photo-item", Photo_item);
