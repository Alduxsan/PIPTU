class FaunaItem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
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
    this.info.classList.toggle("show");
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

    this.shadowRoot.innerHTML = `
    
    <div class="card" id="faunaItem">
        <div class="imgNameContainer">
          <div class="imgWrapper">
            <img src = "${imgSrc}" alt="${name}">
          </div>
          <div class="nameWrapper">
             <p>${name}</p>
          </div>
        </div> 
        <div class="infoWrapper" id="info">
            <p>${info}</p>
        </div>
    </div>
    
    <style>

    .card .show{
      display: block;
    }

    .card{
      display: flex;
      flex-direction: row;
      width: fit-content;
      min-height: 450px;
      justify-content: center;
      transition: all .3s;
      border-radius: 4px;
      border: 1px solid rgba(0, 0, 0, 0.3);
      cursor: pointer;
    }

    .card:hover{
      box-shadow:
    2px 2px 2px 1px rgba(0, 0, 0, 0.5)
    }

    .imgWrapper{
      height: 300px
    }
    .imgWrapper img{
      height: 100%

    }

    .nameWrapper p{
      font-family: raleway, sans-serif;
      font-size: 2rem;
      text-align: center;
      margin: auto;
    }

    .infoWrapper{
      width: 100%;
      display: none;
    }

    .infoWrapper p {
      font-size: var(--text-font-size);
      font-family: raleway, sans-serif;
      padding: 10px;
      text-align: justify;
      text-justify: distribute;
      hyphens: auto 
    }

    @media screen and (max-width: 1100px) {
      .card{
        margin: 1em 0;
        flex-direction: column;
        width: 100%;
        min-height: fit-content;
      }

      .imgWrapper{
        height: 100px;
        width: fit-content;
        margin: auto;
      }
      .infoWrapper p{
        font-size: 1rem
      }
      }
    
    </style>
    `;
  }
}

customElements.define("fauna-item", FaunaItem);
