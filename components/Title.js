import { Title_css } from "../css/css_components.js";

class Title extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return Title_css;
  }

  getAtt(attr){
    let attribute = (this.attribute = this.getAttribute(attr))
    return attribute
  }

  connectedCallback() {
    
    this.render();
  }

  render(){

    let name = this.getAtt("name")
    
    this.shadowRoot.innerHTML = 
    `
    <div class="title">
    <slot name="title"></slot>
    </div>

    <style>
    ${Title.styles}
    </style>
    `;

  }
}

customElements.define("section-title", Title);