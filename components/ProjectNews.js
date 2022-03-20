import { ProjectNews_css } from "../css/css_components.js";

class ProjectNews extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return ProjectNews_css;
  }

  getAtt(attr) {
    let attribute = (this.attribute = this.getAttribute(attr));
    return attribute;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    let date = this.getAtt("date");
    let imgPath = this.getAtt("imgPath");
    let title = this.getAtt("title");
    let content = this.getAtt("content");

    this.shadowRoot.innerHTML = `


    <style>
    ${ProjectNews.styles}
    </style>

    `;
  }
}

customElements.define("project-news", ProjectNews);
