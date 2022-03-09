import { BookItem_css } from "../css/css_components.js";

class BookItem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return BookItem_css;
  }

  getAtt(attr) {
    let attribute = (this.attribute = this.getAttribute(attr) ?? "");
    return attribute;
  }

  setImgSection(img) {
    if (img !== "") {
      return `
      <div class="bookImg">
        <img src="${img}">
      </div>
    `;
    } else {
      return `
      <div></div>
    `;
    }
  }

  connectedCallback() {
    this.render();
  }

  render() {
    let bookImgPath = this.getAtt("bookImgPath");
    let bookLink = this.getAtt("bookLink");
    let editorial_info = this.getAtt("editorial_info");
    this.shadowRoot.innerHTML = `
    <article>
    <div class="book_item_container">
        <div class="book_title">
            <a class="sublink" target="_blank" href="${bookLink}"> 
                <slot name="book_title"></slot>
            </a> 
            <h5>${editorial_info}</h5>    
        </div>

        <div class="img_and_resume_container">
        ${this.setImgSection(bookImgPath)}
            <div class="book_resume">
                <slot name="book_resume"></slot>
            </div>            
        </div>

        <div class="book_info">
            <slot name="book_info"></slot>

        </div>
    </div>
    </article>
    <style>
    ${BookItem.styles}
    </style>
    `;
  }
}

customElements.define("book-item", BookItem);
