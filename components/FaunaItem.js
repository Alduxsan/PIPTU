// import styles from "./css_components/FaunaItem.css" assert { type: "css" };

class FaunaItem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    // this.shadowRoot.adoptedStyleSheets.push(styles);
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
    <style>
    @import url("https://fonts.googleapis.com/css2?family=Raleway&display=swap");
.card .show {
  display: block;
}

.card {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  transition: all 0.3s;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  cursor: pointer;
  padding: 1em;
}
.card .onShowInfo {
  flex-direction: column;
}
.imgNameContainer {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.imgWrapper {
  width: 400px;
  padding: 1em;
}

.imgWrapper img {
  width: 100%;
  object-fit: cover;
  border-radius: 6px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.5);
}

.nameWrapper {
  padding-left: 1em;
}

.nameWrapper p {
  font-family: "Raleway", sans-serif;
}

.commonName {
  font-size: 3rem;
  text-align: left;
  margin: auto;
  transition: all 0.5s;
}

.classification {
  font-size: 1.2rem;
  opacity: 0;
  transition: all 0.5s;
  height: 0;
  overflow: hidden;
}

.infoWrapper {
  width: 100%;
  display: none;
  font-family: raleway, sans-serif;
}

.infoWrapper p {
  font-size: var(--text-font-size);
  padding: 0 10px;
  text-align: justify;
  text-justify: distribute;
  hyphens: auto;
}

.card:hover {
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.5);
}

.card:hover .classification {
  opacity: 1;
  height: auto;
}

@media screen and (max-width: 1100px) {
  .card {
    padding: 3px;
    flex-direction: column;
  }

  .imgWrapper {
    width: 200px;
    margin: auto;
  }

  .infoWrapper p,
  .nameWrapper p {
    font-size: 1rem;
  }
}

    </style>
    `;
  }
}

customElements.define("fauna-item", FaunaItem);
