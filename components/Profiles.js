import { Profiles_css } from "../css/css_components.js";


class Profiles extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" }); 
    
  }

  static get styles() {
    return Profiles_css;
  }

  getAtt(attr){
    let attribute = (this.attribute = this.getAttribute(attr))
    return attribute
  }

  render() {

    let img = this.getAtt("img")

    this.shadowRoot.innerHTML = `
    <div class="profile_card">
    
    <div class="imgNameContainer">
      <div class="imgContainer">
          <img src="${img}" alt="">
      </div>         
    </div>
    
    <details>
    <summary>
      <div class="nameContainer">
          <slot name="name"></slot>
      </div>
    </summary>   
      <div class="bioContainer">
          <slot name="bio"></slot>
      </div>
    </details>
</div> 
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