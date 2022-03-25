import { SubNavbarItem_css } from "../css/css_components.js";
import { SubNavbarContainer_css } from "../css/css_components.js";

class SubNavbarItem extends HTMLElement {
  constructor() {
    super();
  }

  static get styles() {
    return SubNavbarItem_css;
  }

  getAtt(attr) {
    let attribute = (this.attribute = this.getAttribute(attr));
    return attribute;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    let hrefId = this.getAtt("hrefId");
    let imgPath = this.getAtt("imgPath");
    let sectionName = this.getAtt("sectionName");
    let animation = this.getAtt("animation");

    this.innerHTML = `
    <div class="sublink_container ${animation}">    
        <a class="sublink" href="#${hrefId}"> 
            <div class="iconContainer">
                <img src="${imgPath}" alt="" />
            </div>
            <p>${sectionName.toUpperCase()}</p>
        </a>
    </div>
    <style>
    ${SubNavbarItem.styles}
    </style>
   
    `;
  }
}

customElements.define("subnavbar-item", SubNavbarItem);

class SubNavbarContainer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return SubNavbarContainer_css;
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
