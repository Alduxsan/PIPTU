// import styles from "./css_components/PressItem.css" assert { type: "css" };

class PressItem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    // this.shadowRoot.adoptedStyleSheets.push(styles);
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
<style>
.press_item_container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 4px;
  position: relative;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.604);
}

.press_item_container:hover {
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.404);
}

.press-item {
  width: 100%;
  height: 100%;
  background: no-repeat url("/media/icons/photo_loading.png");
  background-size: 30%;
  background-position: center;
  border-radius: 4px;
}

.press-item .image {
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 4px;
}

.image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 50%;
  cursor: pointer;
  border-radius: 4px;
  transition: 0.5s ease-in-out;
}

.press-item .text {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100px;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  pointer-events: none;
  text-align: center;
  background: rgba(0, 0, 0);
  transition: all 0.5s;
}

.text p {
  margin: 0;
  padding: 10px;
  font-family: raleway, "sans-serif";
  color: #fff;
  font-size: 1.3rem;
  vertical-align: middle;
}

.press_item_container:hover .text {
  filter: invert();
}

@media screen and (max-width: 1100px) {
  .text {
    font-size: 1rem;
  }
}

</style>
    `;
  }
}

customElements.define("press-item", PressItem);
