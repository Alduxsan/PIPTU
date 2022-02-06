import { FaunaItem_css } from "../css/css_components.js";

class FaunaItem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return FaunaItem_css;
  }

  getAtt(attr){
    let attribute = (this.attribute = this.getAttribute(attr))
    return attribute
  }

  render(){

    let imgSrc = this.getAtt("imgSrc")
    let name = this.getAtt("name")
    let info = this.getAtt("info")

    this.shadowRoot.innerHTML = 
    `<div class="card">
        <details>
        <summary>
            <div id="imgNameContainer"
            style="background: url(${imgSrc});
            background-size: contain;
            background-repeat: no-repeat;">
                
                    
            </div>
              <div id="name">
                <p>${name}</p>
              </div>
        </summary>
        <div id="detailsContent">
            <p>${info}</p>
        </div>
        </details>
    </div>
    
    <style>
    ${FaunaItem.styles}
    </style>
    `;

  }

  connectedCallback() {
    this.render();
  }
}

customElements.define("fauna-item", FaunaItem);
