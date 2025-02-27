// import styles from "./css_components/SciArticle.css" assert { type: "css" };


// TODO: Hay css cruzado que muestra y oculta elementos de la lista usando las clases show, initalist y hiddenlist. Debería reducirse la lógica para que se vean todos los artículos al presionar "ver mas" y que solo se vean unos al comienzo. 

class SciArticles_container extends HTMLElement {
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
    let articles = document.querySelectorAll("sci-article");

    this.shadowRoot.getElementById("sciList").classList.toggle("expanded");
    btnMore.classList.toggle("hide");
    btnLess.classList.toggle("hide");

    if (btnLess.classList.contains("hide")) {
      document.getElementById("articles").scrollIntoView(true);
    }

    articles.forEach(function (art) {
      art.classList.toggle("hiddenList");
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
    <div class="sciWrapper">
      <div class="sciArticles_container" id="sciList">
        <slot></slot>
      </div>
      <div id="btn" class="toggler_button" type="button">
        <p class="ToggleBtn" id="togglerMore">mostrar todos</p>
        <p class="ToggleBtn hide" id="toggleLess">cerrar lista</p>
      </div>
    </div>
    <style>
    .hide {
      display: none;
    }
    
    .sciWrapper {
      width: 100%;
      margin: auto;
    }
    
    .sciArticles_container {
      font-family: var(--basic-font);
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
    </style>
    `;
  }
}
customElements.define("sciarticles-container", SciArticles_container);

class SciArticle extends HTMLElement {
  constructor() {
    super();
    if (!this.classList.contains("initialList")) {
      this.classList.add("hiddenList", "art-sci");
    }
    this.attachShadow({ mode: "open" });
  }

  getAtt(attr) {
    let attribute = (this.attribute = this.getAttribute(attr) ?? "");
    return attribute;
  }

  handleEvent(event) {
    if (event.type === "click") this.showAbstract();
  }
  showAbstract() {
    this.article = this.shadowRoot.getElementById("abstract-container");
    this.article.classList.toggle("show");
  }

  connectedCallback() {
    this.render();
    this.expandArticle = this.shadowRoot.getElementById("expandArticle");
    this.expandArticle.addEventListener("click", this);
  }

  render() {
    let artLink = this.getAtt("artLink");
    let artTitle = this.getAtt("artTitle");
    let artAbstract = this.getAtt("artAbstract");
    let artAuthors = this.getAtt("artAuthors");
    let editorial = this.getAtt("editorial");

    this.shadowRoot.innerHTML = `
    <article id="expandArticle">
            <div class="art_head_container">
                <div class="title-container">
                  <h3 id="ArtTitle">${artTitle.toUpperCase()}</h3>
                </div>
                <div id="author_editorial_info">
                  <p id="authors">${artAuthors.toUpperCase()}</p>
                  <p id="editorial">${editorial}<p>                    
                </div>
            </div>
            <div id="abstract-container" class="abstract-wrapper">
                <p id="abstract">ABSTRACT</p>
                <p class="artAbastract">${artAbstract}</p>
              <a class="artLink" target="_blank" rel="noopener" href="${artLink}"> 
              <p>Link al artículo</p></a>
            </div>
            <p class="separator"></p>
    </article>
    
    <style>
      
      :host-context(.hiddenList){
        display: none;
      }

      article{
        font-family: var(--basic-font);
        margin: auto;
        padding: 0 5em 1em 5em;
        transition: all 0.5s;
        cursor: pointer;
      }

      article:hover {
        background-color: rgba(255, 255, 255, 0.2);
      }

      .art_head_container{
        display:flex;
        flex-direction: column;
        width: 100%;
      }

      .title-container{
        display:flex;
        flex-direction: row;
        align-items: center;
      }

      #expandButton:hover{
        opacity: 1;
      }

      #ArtTitle{
        font-size: 1.4rem;
        font-weight: 100;
        font-family: var(--basic-font);
        width: 80%;
        margin-bottom: 0
      }
 
      #author_editorial_info{
        display: flex;
        flex-direction: row;
        align-items: baseline;
      }

      #authors{
        margin-right: 1em;
        font-weight: 600;
        min-width: fit-content;
      }

      .abstract-wrapper{
        display:none
      }
      
      #abstract-container.show{
        display: block;
        animation: expand 1s;
        animation-fill-mode: forwards;
      }

      #abstract{
        font-size: 1.3rem
      }

      .artAbastract{
        font-size: 1.3rem;
        column-count: 2;
        text-align: justify;
        text-justify: distribute;
        hyphens: auto;
      }

      .artLink{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        color: black;
        margin-bottom: 1em;
        transition: all 0.5s;
      }

      .artLink:hover > p{
        font-weight: bold;
        border-bottom: 1px solid rgba(0,0,0,0.3);
      }

      .separator{
        width: 70%;
        border-bottom: 1px solid rgba(0,0,0,0.3);
        margin: auto;
      }
      @media screen and (max-width: 1100px) {
        
        article{
          padding: 1em;
        }

        .art_head_container{
          display: block;
        }
        
        .artAbastract{
          column-count: 1;
          text-align: left;
        }

        #ArtTitle{
          border: none;
          padding: 0%;
          width: fit-content
        }

        #author_editorial_info{
          flex-direction: column
        }
      }

      @keyframes expand {
        from {opacity: 0}
        to {opacity: 1}
      }
    </styles>
    `;
  }
}

customElements.define("sci-article", SciArticle);
