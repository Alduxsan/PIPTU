class BookItem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
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
       
            <div class="book_resume">
            ${this.setImgSection(bookImgPath)}
                <slot name="book_resume"></slot>
            </div>            
        </div>

        <div class="book_info">
            <slot name="book_info"></slot>

        </div>
    </div>
    </article>
    <style>

  article{
    font-family: quicksand, sans-serif;
    margin-bottom: 1%
  }

  .book_item_container{
    padding: 2%;
    background-color: rgba(240, 255, 240, 0.5);
    border-radius: 4px;
  }

  .book_title{
    font-family: quicksand, sans-serif;
  }

  .sublink{
    text-decoration: none;
    color: black;
    text-transform: uppercase;
    font-size: 1.3rem;
  }

  .img_and_resume_container{
    margin-top: 1%;
    display: flex;

    text-align: justify;
    text-justify: distribute;
    hyphens: auto 
  }

  .book_resume{
    font-family: quicksand, sans-serif;
    font-size: 1.3rem;
  }

  .bookImg{
    margin-right: 2%; 
    height:300px;
    float: left;
  }
  img{
    height: 100%;
    border-radius: 4px
  }

  @media screen and (max-width: 1100px) {
    .bookImg{
      margin-right: 0; 
      height:300px;
      float: none;
      width: fit-content;
      margin: auto;
    }
    </style>
    `;
  }
}

customElements.define("book-item", BookItem);
