import { SubContent_css } from "../css/css_components.js";

class SubContent extends HTMLElement {
  constructor() {
    super();
  }

  static get styles() {
    return SubContent_css;
  }

  imgStyle(url) {
    return `
    style="
    background-image: 
    linear-gradient(
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.4)
    ), url(${url});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    margin: auto;
    width: 100%;
    height: 400px;
    border-radius: 6px;
    margin-top: 3%;
    margin-bottom: 3%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;"
    `;
  }

  set_img(img, title) {
    return img && img.match(/.(jpg|jpeg|png|gif)$/i)
      ? `<div class="imgContainer" ${this.imgStyle(img)}>
      <p class="subsection_title">${title}</p>
  </div>  `
      : "<div></div>";
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
            
            ${this.set_img(data.img, data.subsection_title)}           
            <div><p class="subsection_content">${
              data.subsection_content
            }</p></div>            
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
