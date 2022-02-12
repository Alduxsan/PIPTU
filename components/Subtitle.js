import { Subtitle_css } from "../css/css_components.js";

class Subtitle extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return Subtitle_css;
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
    ${Subtitle.styles}
    </style>
    `;

  }
}

customElements.define("sub-title", Subtitle);
