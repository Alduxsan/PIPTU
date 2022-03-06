import { ActivitiesItem_css } from "../css/css_components.js";

class ActivitiesItem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return ActivitiesItem_css;
  }

  getAtt(attr) {
    let attribute = (this.attribute = this.getAttribute(attr) ?? "");
    return attribute;
  }

  setImage(img) {
    this.shadowRoot.getElementById(
      "img-container"
    ).style.backgroundImage = `url(${img})`;
  }

  render() {
    let title = this.getAtt("title");
    let text = this.getAtt("text");

    this.shadowRoot.innerHTML = `
    <article>
    <div class="activities_item_container">
        <div class="imgContainer" id="img-container">
          <p id="activity-title">${title}</p>
        </div>
        <div class="activity_text_container">
            <p>${text}</p>            
        </div>
    </div>
    </article>
    <style>
    ${ActivitiesItem.styles}
    </style>
    `;
  }

  connectedCallback() {
    let imgPath = this.getAtt("imgPath");
    this.render();
    this.setImage(imgPath);
  }
}

customElements.define("activities-item", ActivitiesItem);
