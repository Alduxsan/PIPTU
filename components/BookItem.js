import { BookItem_css } from "../css/css_components.js";

class BookItem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return BookItem_css;
  }

  getAtt(attr){
    let attribute = (this.attribute = this.getAttribute(attr))
    return attribute
  }

  connectedCallback() {
    
    this.render();
  }

  render(){
   
    let bookImgPath = this.getAtt("bookImgPath")
    let bookLink = this.getAtt("bookLink")

    this.shadowRoot.innerHTML = 
    `
    <div class="book_item_container">
        <div class="book_title">
            <a class="sublink" href="${bookLink}"> 
                <slot name="book_title"></slot>
            </a>      
        </div>

        <div class="img_and_resume_container">
            <div class="book_resume">
                <slot name="book_resume"></slot>
            </div>
            <div class="bookImg">
                <img src="${bookImgPath}">
            </div>
        </div>

        <div class="book_info">
            <slot name="book_info"></slot>

        </div>
    </div>
    
    <style>
    ${BookItem.styles}
    </style>
    `

  }
}

customElements.define("book-item", BookItem);
