import { ProjectListItem_css } from "../css/css_components.js";

class ProjectListItem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return ProjectListItem_css;
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
    let src = this.getAtt("src")

    this.shadowRoot.innerHTML = 
    `<div class="link-container"><a href=${src}>${name}</a></div>
    
    <style>
    ${ProjectListItem.styles}
    </style>
    `;

  }
}

customElements.define("project-listitem", ProjectListItem);
