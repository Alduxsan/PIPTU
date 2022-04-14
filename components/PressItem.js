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
            <a target="_blank" href="${link}"> 
              <img src="${imgPath}" loading:"lazy" alt="${title}">
            </a>
         </div>
        <div class="text"><p>${title}</p></div>
       </div>
    </div>

    <style>
  
    .press_item_container{
      width: 100%;
      height: 100%;
      overflow: hidden;
      border-radius: 4px;
      position: relative;

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
      width:100%;
      position: absolute;
      bottom:0;
      left: 0;
      pointer-events: none;
      text-align: center;
      background: rgba(0,0,0);
      transition: all 0.5s;
    }

    .text p{
      margin: 0;
      padding: 10px;
      font-family: quicksand, "sans-serif";
      color: #fff;
      font-size: 1.3rem;
    }
    
    .press_item_container:hover .text { 
      filter: invert()
    }
  
    @media screen and (max-width: 1100px) {
      
    }
    </style>
    `;
  }
}

customElements.define("press-item", PressItem);
