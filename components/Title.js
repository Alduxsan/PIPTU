class Title extends HTMLElement {
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
  }

  render() {
    this.shadowRoot.innerHTML = `
    <div class="${this.getAtt("type")}">
    <p>${this.getAtt("title")}</p>
    </div>

    <style>
    .title {
      padding: 2%
    
    }
    
    .title p {
      margin-top: 0;
      font-family: "Cabin Sketch", sans-serif;
      font-weight: 700;
      font-size: 7rem;
      color: rgb(255, 255, 255);
      text-align: center;
      text-shadow: 2px 2px 2px rgb(0, 0, 0);
      margin-bottom: 0;
    }
    
    .subtitle { 
      margin: auto;
      width: min-content;
      margin-top: 6%;
      
    }
    
    .subtitle p { 
      text-align: center;
      font-weight: 700;
      font-family: "Cabin Sketch", sans-serif;
      font-size: calc(1.3rem + 3.6vw);
      color: rgb(255, 255, 255);
      text-shadow: 2px 2px 2px rgb(0, 0, 0);
    }
    
    @media screen and (max-width: 1100px) {
    
      .subtitle p { 
        font-size: calc(1.3rem + 3.6vw);
      }
    
      .title{
        width: fit-content;
        margin: auto;
        margin-top: 50px
      }
    
     .title p {
      font-size: calc(1.3rem + 3.6vw);
      }
      
    }
    </style>
    `;
  }
}

customElements.define("section-title", Title);
