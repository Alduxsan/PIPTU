import { SubNavbarItem_css } from "../css/css_components.js";

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
{
  /* <a href="#home" class="active">${this.atributo}</a> */
}
