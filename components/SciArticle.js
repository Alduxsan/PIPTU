class SciArticle extends HTMLElement {
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
    <details>
        <summary>
            <div class="art_head_container">
            <h3 id="ArtTitle">${artTitle.toUpperCase()}</h3>
                <div id="author_editorial_info">
                <h4>${artAuthors.toUpperCase()}</h4>
                <h5>${editorial}<h5>                    
                </div>
            <div>
        </summary>
        <h4 id="abstract">ABSTRACT</h4>
            <p class="artAbastract">${artAbstract}</p>

          <a class="artLink" target="_blank" href="${artLink}"> 
          <p>Link al artículo</p> <div class="iconContainer"><img src="media/icons/arrow.png"></div></a>
    </details>
    </article>
    <style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');

article{
  font-family: 'Roboto', sans-serif;
  margin: 1%;
  border-radius: 4px;
  padding: 1%;
}

article:hover {
  border-top: 1px solid rgba(0,0,0, 0.3);
  border-bottom: 1px solid rgba(0,0,0, 0.3);
  background-color: rgba(255, 255, 255, 0.2);
}


.art_head_container{
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1%;
  align-items: center;
}

#ArtTitle{
  border-right: 1px solid black;
  padding: 2%
}

details summary { 
  width: 100%;
  cursor: pointer;
  display: flex;
}

#abstract{
  margin: 0;
}

.artAbastract{
  column-count: 2;
  text-align: justify;
  text-justify: distribute;
  hyphens: auto;
}

.artLink{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;
  text-decoration: none;
  color: black;
}

.iconContainer img{
  width: 40px;
  margin-left: 10px;
}

.artLink:hover{
  font-size: 1.3rem
  
}
@media screen and (max-width: 1100px) {
  summary {
  }

  details summary { 
    display: block;
  }
  
  .art_head_container{
    display: block;
  }
  
  .artAbastract{
    column-count: 1;
  }

  #ArtTitle{
    border: none;
    padding: 0%
  }
}
    </style>
    `;
  }
}

customElements.define("sci-article", SciArticle);
