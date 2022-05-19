class FaunaItem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  getAtt(attr) {
    let attribute = (this.attribute = this.getAttribute(attr));
    return attribute;
  }

  render() {
    let imgSrc = this.getAtt("imgSrc");
    let name = this.getAtt("name");
    let info = this.getAtt("info");

    this.shadowRoot.innerHTML = `<div class="card">
        <details>
        <summary>
            <div id="imgNameContainer"
            style="background: url(${imgSrc});
            background-size: contain;
            background-repeat: no-repeat;">
                
                    
            </div>
              <div id="name">
                <p>${name}</p>
              </div>
        </summary>
        <div id="detailsContent">
            <p>${info}</p>
        </div>
        </details>
    </div>
    
    <style>
    .card{
      font-family: raleway, sans-serif;
      width: fit-content;
      margin: 20px;
      justify-content: center;
      transition: box-shadow .5s;
      border-radius: 8px;
    }

    .card:hover{
      box-shadow:
    2px 2px 2px 1px rgba(0, 0, 0, 0.5),
    2px 4px 4px 1px rgba(0, 0, 0, 0.5)
    }

    details{
      cursor: pointer;
      border-radius: 8px;
      list-style: none;
      width: min-content;
      background-color: rgba(255, 255, 255, 0.5);
      border-radius: 8px;
      padding: 20px;
      border: 1px solid rgba(0, 0, 0, 0.3)
    }
    
    summary{
      height: 394px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      gap: 0;
    }

    #imgNameContainer{
      position:relative;
      width: 300px;
      height: 300px;
      text-align: center;
    }

    #itemImg{
      width: 100%
    }

    #name p{
      font-size: 2rem;
      text-align: center;
      margin: 0;
    }

    #detailsContent{
      padding: 10px;
      text-align: justify;
      text-justify: distribute;
      hyphens: auto 
    }
    </style>
    `;
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define("fauna-item", FaunaItem);
