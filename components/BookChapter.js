import { BookChapter_css } from "../css/css_components.js";

class BookChapter extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return BookChapter_css;
  }

  getAtt(attr) {
    let attribute = (this.attribute = this.getAttribute(attr) ?? "");
    return attribute;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    let artLink = this.getAtt("artLink");
    let artTitle = this.getAtt("artTitle");
    let artAbstract = this.getAtt("artAbstract");
    let artAuthors = this.getAtt("artAuthors");
    let editorial = this.getAtt("editorial");

    this.shadowRoot.innerHTML = `
    <article>
    <a class="artLink" target="_blank" href="${artLink}"> 
    <div class="art_head_container">
    <h3 id="ArtTitle">${artTitle.toUpperCase()}</h3>
        <div id="author_editorial_info">
          <h4>${artAuthors.toUpperCase()}</h4>
          <h5>${editorial}<h5>                    
        </div>
    <div></a>            
    </article>
    <style>
    ${BookChapter.styles}
    </style>
    `;
  }
}

customElements.define("book-chapter", BookChapter);
