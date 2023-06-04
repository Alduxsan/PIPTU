import styles from "./css_components/Bookitem.css" assert { type: "css" };

class BookItem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.adoptedStyleSheets.push(styles);
  }

  getAtt(attr) {
    let attribute = (this.attribute = this.getAttribute(attr) ?? "");
    return attribute;
  }

  setImgSection(img) {
    if (img !== "") {
      return `
      <div class="bookImg">
        <img src="${img}" loading="lazy" alt="portada de libro">
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
    <a class="sublink" target="_blank" rel="noopener" href="${bookLink}"> 
    <div class="book_item_container">
        <div class="book_title">
           
                <slot name="book_title"></slot>
            
            <h5 class="editorialInfo">${editorial_info}</h5>    
        </div>

        <div class="img_and_resume_container">
       
            <div class="book_resume">
            ${this.setImgSection(bookImgPath)}
                <slot name="book_resume"></slot>
            </div>            
        </div>

       
    </div>
    </a> 
    </article>
    
    `;
  }
}

customElements.define("book-item", BookItem);
