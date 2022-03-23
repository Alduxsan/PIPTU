import { Photo_item_css } from "../css/css_components.js";

class Photo_item extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return Photo_item_css;
  }

  getAtt(attr) {
    let attribute = (this.attribute = this.getAttribute(attr) ?? "");
    return attribute;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
    
    <style>
    ${Photo_item.styles}
    </style>
    `;
  }
}

customElements.define("photo-item", Photo_item);
