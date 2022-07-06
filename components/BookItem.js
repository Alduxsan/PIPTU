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
    
    <style>
 
    .separator{
      width: 70%;
      border-bottom: 1px solid rgba(0,0,0,0.3);
      margin: auto;
      margin-top: 2em;
      margin-bottom: 2em; 
    }

    article{
      font-family: raleway, sans-serif;
      padding: 1em 5em;
    transition: all .5s   }

    article:hover{
      background-color: rgba(255, 255, 255, 0.2);
    }

    .book_title{
      font-weight: 100;
      font-family: raleway, sans-serif;
    }

    .editorialInfo{
      font-family: raleway, san-serif;
      font-size: 1rem;
      margin-right: 1em;
      min-width: fit-content;
    }

    .sublink{
      text-decoration: none;
      color: black;
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
      font-family: raleway, sans-serif;
      font-size: 1.3rem;
    }

    .bookImg {
      margin: 0 1em 1em 0;
      height: 300px;
      float: left;
      box-shadow: 2px 2px 2px black;
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
        margin-bottom: 1em;
      }

      article{
        padding: 1em
      }

      .editorialInfo{
        text-align: left;
        word-break: break-all
      }
    }
      </style>
    `;
  }
}

customElements.define("book-item", BookItem);
