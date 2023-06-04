import SubNavbarContainerCSS from "./css_components/SubNavbarContainer.css" assert { type: "css" };
import SubNavbarItemCSS from "./css_components/SubNavbarItem.css" assert { type: "css" };

class SubNavbarItem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.adoptedStyleSheets.push(SubNavbarItemCSS);
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

    this.shadowRoot.innerHTML = `
    <div class="sublink_container ${animation}">    
        <a class="sublink" href="#${hrefId}"> 
            <div class="iconContainer">
                <img src="${imgPath}" alt="${sectionName}" width="100" height="100" />
            </div>
            <p id="section-name">${sectionName.toUpperCase()}</p>
        </a>
    </div>
 
   
    `;
  }
}

customElements.define("subnavbar-item", SubNavbarItem);

class SubNavbarContainer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.adoptedStyleSheets.push(SubNavbarContainerCSS);
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
   
 
   
    `;
  }
}

customElements.define("subnavbar-container", SubNavbarContainer);
