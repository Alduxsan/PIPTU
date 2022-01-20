import profiles from "../db/profiles-data.js";
import { Profiles_css } from "../css/css_components.js";

class Profiles extends HTMLElement {
  constructor() {
    super();
  }

  data = profiles;
 

  profileData(data) {
    return `
    <div class="profile_card">
    <div class="imgNameContainer">
    <div class="imgContainer">
          <img src="${data.img}" alt="">
        </div>
      <div class="nameContainer">
        <p>${data.name}</p>
      </div>
      </div>   
      <div class="bioContainer">
          <p>${data.bio}</p>
      </div>
  </div>
          `;
  }

  static get styles() {
    return Profiles_css;
  }

  render() {
    this.innerHTML = `
        ${this.data.map(this.profileData).join("")}  
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
