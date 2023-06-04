import styles from "./css_components/Profiles.css" assert { type: "css" };
import profiles_container from "./css_components/Profiles_container.css" assert { type: "css" };

class Profiles_container extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.adoptedStyleSheets.push(profiles_container);
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
    <div class="profiles_wrapper">
      <slot></slot>
    </div>
    `;
  }
}

customElements.define("profiles-container", Profiles_container);

class Profiles extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.adoptedStyleSheets.push(styles);
  }

  // static get styles() {
  //   return Profiles_css;
  // }

  getAtt(attr) {
    let attribute = (this.attribute = this.getAttribute(attr) || "Empty");
    return attribute;
  }

  handleEvent(event) {
    if (event.type === "click") this.showInfo();
  }

  showInfo() {
    this.classList.toggle("opened-profile");

    this.info = this.shadowRoot.getElementById("detailsContent");
    this.info.classList.toggle("hide");
    this.info.scrollIntoView({ block: "end", behavior: "smooth" });
  }
  connectedCallback() {
    this.render();
    this.card = this.shadowRoot.getElementById("card");
    this.card.addEventListener("click", this);
  }

  render() {
    let img = this.getAtt("img");
    let imgFix = this.getAtt("imgFix");
    let bio = this.getAtt("bio");
    let name = this.getAtt("name");

    if (this.classList.contains("dummy")) {
      this.shadowRoot.innerHTML = `

    <div id="card" class="profile_card"> </div>
    <style>
    .profile_card{
      display: flex;
      font-family: raleway, sans-serif;
      justify-content: center;
      transition: box-shadow .5s;
      cursor: pointer;
      border-radius: 4px;
      border: 1px solid rgba(0, 0, 0, 0.0);
      padding: 1em;
      min-width: 350px;
      min-height: 350px;
      transition: all 0.3s
    }
    </style>
    `;
    } else {
      this.shadowRoot.innerHTML = `

    <div id="card" class="profile_card">        
        <div  class="imgNameContainer">
          <div id=${imgFix} class="imgContainer">
            <img src="${img}" loading="lazy" alt="${name}">
          </div>
          <div class="name">
            <p>${name}</p>
          </div>
        </div>
        <div id="detailsContent" class="bio-wrapper hide">
          <p class="bio">${bio}</p>
        </div>

    </div>

      
      `;
    }
  }
}

customElements.define("profile-box", Profiles);
