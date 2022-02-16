import { BookItem_css } from "../css/css_components.js";

class BookItem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return BookItem_css;
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
    <div class="subtitle">
    <slot name="title"></slot>
    </div>

    <style>
    ${BookItem.styles}
    </style>
    `;

  }
}

customElements.define("book-item", BookItem);
