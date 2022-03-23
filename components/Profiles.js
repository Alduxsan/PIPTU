import { Profiles_css } from "../css/css_components.js";

class Profiles extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return Profiles_css;
  }

  getAtt(attr) {
    let attribute = (this.attribute = this.getAttribute(attr));
    return attribute;
  }

  handleEvent(event) {
    console.log(event);
    if (event.type === "click") this.showInfo();
  }

  showInfo() {
    this.info = this.shadowRoot.getElementById("detailsContent");
    this.info.classList.toggle("hide");
    this.info.scrollIntoView({ block: "end", behavior: "smooth" });
  }

  connectedCallback() {
    let img = this.getAtt("img");

    this.shadowRoot.innerHTML = `

    <div id="card" class="profile_card">
        
        <div id="imgNameContainer">
          <div class="imgContainer">
            <img src="${img}">
          </div>
          <div id="name">
            <slot name="name"></slot>
          </div>
        </div>
        <div id="detailsContent" class="hide">
          <slot name="bio"></slot>
        </div>
        
        
    </div>

      <style>
      ${Profiles.styles}
      </style>
      `;
    this.card = this.shadowRoot.getElementById("card");
    this.card.addEventListener("click", this);
  }
}

customElements.define("profile-box", Profiles);
