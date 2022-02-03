import profiles from "../db/profiles-data.js";
import { Profiles_css } from "../css/css_components.js";


class Profiles extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" }); 
    
  }

  data = profiles;
 
  profileTemplate(data){
    const template = document.createElement('template');
    return template.innerHTML = `  

    <div class="profile_card">
    
        <div class="imgNameContainer">
          <div class="imgContainer">
              <img src="${data.img}" alt="">
          </div>         
        </div>
        
        <details>
        <summary>
          <div id="name" class="nameContainer">
              <p id="name">${data.name}</p>
          </div>
        </summary>   
          <div class="bioContainer">
              <p class="bio">${data.bio}</p>
          </div>
        </details>
    </div>
    `
  }

  static get styles() {
    return Profiles_css;
  }

  render() {
    this.shadowRoot.innerHTML = `
        ${this.data.map(this.profileTemplate).join("")}  
      <style>
      ${Profiles.styles}
      </style>
      `;
  }

  connectedCallback() {
    this.render();
  }

  
}

customElements.define("profile-box", Profiles);