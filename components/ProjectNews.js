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

  showInfo() {
    this.info = this.shadowRoot.getElementById("info");
    this.info.classList.toggle("hide");
    this.info.scrollIntoView({ block: "end", behavior: "smooth" });
  }

  handleEvent(event) {
    console.log(event);
    if (event.type === "click") this.showInfo();
  }

  connectedCallback() {
    this.render();
  }
  render() {
    let date = this.getAtt("date");
    let imgPath = this.getAtt("imgPath");
    let title = this.getAtt("title").toUpperCase();
    let content = this.getAtt("content");

    this.shadowRoot.innerHTML = `

    <div id="container" class="news_container">
      <div class="text-block">
        <p id="date">${date}</p>
        <p id="title">${title}</p>
      </div>
    </div>
    <div id="info" class="news_content hide fromRight">
    <p class="content">
    ${content}
    </p>
    </div>

    <style>
    ${ProjectNews.styles}
    .news_container{
      background: no-repeat center url(${imgPath});
      background-size: cover;
    }
    </style>

    `;
    this.card = this.shadowRoot.getElementById("container");
    this.card.addEventListener("click", this);
  }
}

customElements.define("project-news", ProjectNews);
