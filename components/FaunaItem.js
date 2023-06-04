import styles from "./css_components/FaunaItem.css" assert { type: "css" };

class FaunaItem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.adoptedStyleSheets.push(styles);
  }

  getAtt(attr) {
    let attribute = (this.attribute = this.getAttribute(attr));
    return attribute;
  }

  handleEvent(event) {
    if (event.type === "click") {
      this.showInfo();
    }
  }

  showInfo() {
    this.classList.toggle("active-fauna-item");
    this.info = this.shadowRoot.getElementById("info");
    this.imgNameWrapper = this.shadowRoot.getElementById("imageNameWrapper");
    this.info.classList.toggle("show");
    this.imgNameWrapper.classList.toggle("onShowInfo");
    this.info.scrollIntoView({ block: "end", behavior: "smooth" });
  }

  connectedCallback() {
    this.render();
    this.cardInfo = this.shadowRoot.getElementById("faunaItem");
    this.cardInfo.addEventListener("click", this);
  }

  render() {
    let imgSrc = this.getAtt("imgSrc");
    let name = this.getAtt("name");
    let info = this.getAtt("info");
    let classification = this.getAtt("classification");

    this.shadowRoot.innerHTML = `
    
    <div class="card" id="faunaItem">
        <div id="imageNameWrapper" class="imgNameContainer">
            <div class="imgWrapper">
              <img src = "${imgSrc}" alt="${name}">
            </div>
            <div class="nameWrapper">
              <p class="commonName">${name}</p>
              <p class="classification">${classification}</p>
            </div>
        </div>
        <div class="infoWrapper" id="info">
            <p>${info}</p>
        </div>
        
    </div>
    `;
  }
}

customElements.define("fauna-item", FaunaItem);
