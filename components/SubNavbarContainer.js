import { SubNavbarContainer_css } from "../css/css_components.js";

class SubNavbarContainer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return SubNavbarContainer_css;
  }

  getAtt(attr){
    let attribute = (this.attribute = this.getAttribute(attr))
    return attribute
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
    <div class="sublink_container">
        <slot></slot>
    </div>
   
    <style>
    ${SubNavbarContainer.styles}
    </style>
   
    `;
  }
}

customElements.define("subnavbar-container", SubNavbarContainer);

