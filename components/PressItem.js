import styles from "./css_components/PressItem.css" assert { type: "css" };

class PressItem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.adoptedStyleSheets.push(styles);
  }

  getAtt(attr) {
    let attribute = (this.attribute = this.getAttribute(attr) ?? "");
    return attribute;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    let link = this.getAtt("link");
    let title = this.getAtt("title");
    let imgPath = this.getAtt("imgPath");

    this.shadowRoot.innerHTML = `

    <div class="press_item_container">
       <div class="press-item">
         <div class="image">
            <a target="_blank" rel="noopener" href="${link}"> 
              <img src="${imgPath}" loading:"lazy" alt="${title}">
            </a>
         </div>
        <div class="text"><p>${title}</p></div>
       </div>
    </div>

    `;
  }
}

customElements.define("press-item", PressItem);
