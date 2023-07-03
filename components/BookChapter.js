// import styles from "./css_components/BookChapter.css" assert { type: "css" };

class BookChapters_container extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    // this.shadowRoot.adoptedStyleSheets.push(styles);
  }

  handleEvent(event) {
    console.log(event);
    if (event.type === "click") this.display_more();
  }

  display_more() {
    let btnMore = this.shadowRoot.getElementById("togglerMore");
    let btnLess = this.shadowRoot.getElementById("toggleLess");
    let chapters = document.querySelectorAll("book-chapter");

    this.shadowRoot.getElementById("chapterList").classList.toggle("expanded");
    btnMore.classList.toggle("hide");
    btnLess.classList.toggle("hide");

    if (btnLess.classList.contains("hide")) {
      document.getElementById("bookChapters").scrollIntoView(true);
    }

    chapters.forEach(function (chapter) {
      chapter.classList.toggle("normalChapter");
    });
  }

  getAtt(attr) {
    let attribute = (this.attribute = this.getAttribute(attr) ?? "");
    return attribute;
  }

  connectedCallback() {
    this.render();
    this.btn = this.shadowRoot.getElementById("btn");
    this.btn.addEventListener("click", this);
  }

  render() {
    this.shadowRoot.innerHTML = `
    <div class="chapterWrapper">
      <div class="bookChapters_container" id="chapterList">
        <slot></slot>
      </div>
      <div id="btn" class="toggler_button" type="button">
        <p class="ToggleBtn" id="togglerMore">mostrar todos</p>
        <p class="ToggleBtn hide" id="toggleLess">cerrar lista</p>
      </div>
    </div>
    `;
  }
}
customElements.define("bookchapters-container", BookChapters_container);

class BookChapter extends HTMLElement {
  constructor() {
    super();
    if (!this.classList.contains("initialChapters")) {
      this.classList.add("normalChapter", "book-chapter");
    }
    this.attachShadow({ mode: "open" });
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
    let artAuthors = this.getAtt("artAuthors");
    let editorial = this.getAtt("editorial");

    this.shadowRoot.innerHTML = `
    <article>
    <a class="artLink" target="_blank" rel="noopener" href="${artLink}"> 
      <div class="art_head_container">
        <h3 id="ArtTitle">${artTitle.toUpperCase()}</h3>
        <div id="author_editorial_info">
          <p id="authors">${artAuthors.toUpperCase()}</p>
          <p id="editorial">${editorial}<p>                    
        </div>
      <div>
    </a>           
    <p class="separator"></p> 
    </article>

    <style>
    .hide {
      display: none;
    }
    
    .chapterWrapper {
      width: 100%;
      margin: auto;
    }
    
    .bookChapters_container {
      font-family: raleway, sans-serif;
      margin: auto;
    }
    
    .expanded {
      animation: expand 2s;
      animation-fill-mode: forwards;
    }
    
    .toggler_button {
      width: fit-content;
      margin: auto;
      margin-top: 20px;
      padding-bottom: 2em;
    }
    
    .ToggleBtn {
      text-align: center;
      border-radius: 4px;
      cursor: pointer;
      padding: 10px;
      background-color: rgba(255, 255, 255, 0.644);
      transition: all 0.2s;
      box-shadow: 4px 4px 2px rgba(0, 0, 0, 0.604);
    }
    
    .ToggleBtn:hover {
      box-shadow: 8px 8px 2px rgba(0, 0, 0, 0.304);
    }
    
    @keyframes expand {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    

    :host-context(.normalChapter){
      display: none;
    }
    .separator{
      width: 70%;
      border-bottom: 1px solid rgba(0,0,0,0.3);
      margin: auto;
    }

      article{
        font-family: raleway, sans-serif;
        margin: auto;
        padding: 1em 5em 1em 5em;
        transition: all 0.3s;
        cursor: pointer;
      }

      article:hover {
        background-color: rgba(255, 255, 255, 0.2);
      }

      .artLink{
        text-decoration: none; 
        color: black;
        width: 80%;
        align-items: center;
      }

      #ArtTitle{
        padding: 1em 0 0 0;
        margin: 0;
        font-family: raleway, sans-serif;
        font-size: 1.4rem;
        font-weight: 100;
        width: 80%
      }

      #author_editorial_info{
        display: flex;
        flex-direction: row;
        align-items: baseline;
        font-family: raleway, sans-serif;
      }

      #authors{
        margin-right: 1em;
        font-weight: 600;
        max-width: 50%
      }

      #editorial{
        max-width: 49%
      }

      @media screen and (max-width: 1100px) {

        .artLink{
          display: block;
          width: 100%
        }

        #ArtTitle{
          padding: 0;
          border-right: 0px;
          text-align: left;
        }

        article{
          margin: auto;
          padding: 1em;
        }
        
        #author_editorial_info {
          text-align: left;
          flex-direction: column;
        }
      }
    </style>
    `;
  }
}

customElements.define("book-chapter", BookChapter);
