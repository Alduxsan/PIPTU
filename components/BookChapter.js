class BookChapter extends HTMLElement {
  constructor() {
    super();
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
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');

article{
  width: fit-content;
  font-family: 'Roboto', sans-serif;
  margin: 1%;
  border-radius: 4px;
}

article:hover {
  border-top: 1px solid black;
  border-bottom: 1px solid black;
}


.artLink{
  text-decoration: none; 
  color: black;
  width: fit-content;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1%;
  align-items: center;
}

#ArtTitle{
  border-right: 1px solid black;
  padding: 2%
}

#author_editorial_info{
  width: fit-content;
}

@media screen and (max-width: 1100px) {

  .artLink{
    display: block;
    width: 100%
  }

  #ArtTitle{
    padding: 0
  }

  article{
    margin: auto;
    padding: 2%
  }
}
    </style>
    `;
  }
}

customElements.define("book-chapter", BookChapter);
