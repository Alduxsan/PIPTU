import { SubContent_css } from "../css/css_components.js";

class SubContent extends HTMLElement {
  constructor() {
    super();
  }

  static get styles() {
    return SubContent_css;
  }


  set_img(img) {
    return img && img.match(/.(jpg|jpeg|png|gif)$/i) ? `<div class="imgContainer" 
    style="
    background-image: url(${img});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    margin: auto;
    width: 100%;
    height: 400px;
    border-radius: 6px;
    margin-top: 3%;
    margin-bottom: 3%;
  }
    ">
  </div>  `: "<div></div>"
     
  }

  getSubcontent(section) {
    return new Promise((res, rej) => {
      fetch("db/content-data.json")
        .then((data) => data.json())
        .then((json) => {
          this.renderSubcontent(json[section]);
          res();
        })
        .catch((error) => rej(error));
    });
  }

  renderSubcontent(json) {
    this.innerHTML = json
      .map((data) => {
        return `
          <div class="subsection">
            <h2 class="subsection_title">${data.subsection_title}</h2>
            ${this.set_img(data.img)}           
            <div><p class="subsection_content">${data.subsection_content}</p></div>            
          </div>
          <br>
      <style>
      ${SubContent.styles}
      </style>
      `;
      })
      .join("");
  }

  connectedCallback() {
    let section = (this.section = this.getAttribute("section") ?? "");
    this.render(section);
  }

  render(section) {
    `${this.getSubcontent(section)}`;
  }
}

customElements.define("sub-content", SubContent);
