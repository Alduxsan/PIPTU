import { Collection_container_css } from "../css/css_components.js";

class Collection_container extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return Collection_container_css;
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
    ${Collection_container.styles}
    </style>
   
    `;
  }
}

customElements.define("collection-container", Collection_container);
