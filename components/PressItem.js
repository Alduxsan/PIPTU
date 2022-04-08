class PressItem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  getAtt(attr) {
    let attribute = (this.attribute = this.getAttribute(attr) ?? "");
    return attribute;
  }

  setBackgroundImg(imgPath) {
    this.container = this.shadowRoot.getElementById("background");
    this.container.style.backgroundImage = `url(${imgPath})`;
  }

  connectedCallback() {
    let articleImgPath = this.getAtt("articleImgPath");

    this.render();
    this.setBackgroundImg(articleImgPath);
  }

  render() {
    let articleLink = this.getAtt("articleLink");

    this.shadowRoot.innerHTML = `
    <article>
      <div id="background" class="press_item_container">
      
          <a class="sublink" target="_blank" href="${articleLink}"> 
              <slot name="article_title"></slot>
          </a>
      </div>
    </article>
    <style>
    article{
      font-family: quicksand, sans-serif;
      overflow: hidden;
      border-radius: 4px;
    }
    
  
    .press_item_container{
      border-radius: 4px;
      display: flex;
      justify-content: center;
      height: 300px;
      background-repeat: no-repeat;
      background-size: cover;
      align-items: flex-end;
      transition: all 0.5s;
  
    }
  
    .sublink{
      color: white;
      width: 100%;
      height: fit-content;
      text-decoration: none;
      text-transform: uppercase;
      font-size: 100%;
      padding: 3%;
      background-color: rgba(0, 0, 0, 0.507);
      backdrop-filter: blur(10px);
      border-radius: 0 0 6px 6px;
      text-align: center;
      transition: all 0.5s;
    }
    .press_item_container:hover > .sublink { 
      background-color: rgba(0, 0, 0);
    }
  
    @media screen and (max-width: 1100px) {
      .press_item_container{
        width: 350px;
      }
    }
    </style>
    `;
  }
}

customElements.define("press-item", PressItem);
