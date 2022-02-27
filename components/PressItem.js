import { PressItem_css } from "../css/css_components.js";

class PressItem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return PressItem_css;
  }

  getAtt(attr){
    let attribute = this.attribute = this.getAttribute(attr) ?? ""
    return attribute
  }

  setBackgroundImg(imgPath){
    this.container = this.shadowRoot.getElementById("background");
    this.container.style.backgroundImage = `url(${imgPath})`;
  }

  connectedCallback() {
    let articleImgPath = this.getAtt("articleImgPath")

    this.render();
    this.setBackgroundImg(articleImgPath)
  }

  render(){

    let articleLink = this.getAtt("articleLink")

    this.shadowRoot.innerHTML = 
    `
    <article>
      <div id="background" class="press_item_container">
      
          <a class="sublink" href="${articleLink}"> 
              <slot name="article_title"></slot>
          </a>
      </div>
    </article>
    <style>
    ${PressItem.styles}
    </style>
    `
  }
  
}

customElements.define("press-item", PressItem);
