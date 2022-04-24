class SubNavbarItem extends HTMLElement {
  constructor() {
    super();
  }

  getAtt(attr) {
    let attribute = (this.attribute = this.getAttribute(attr));
    return attribute;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    let hrefId = this.getAtt("hrefId");
    let imgPath = this.getAtt("imgPath");
    let sectionName = this.getAtt("sectionName");
    let animation = this.getAtt("animation");

    this.innerHTML = `
    <div class="sublink_container ${animation}">    
        <a class="sublink" href="#${hrefId}"> 
            <div class="iconContainer">
                <img src="${imgPath}" alt="${sectionName}" width="100" height="100" />
            </div>
            <p>${sectionName.toUpperCase()}</p>
        </a>
    </div>
    <style>
    .sublink_container{
      margin: 15px;
      margin-top: 50px;
      padding: 10px
    }
    
    .sublink {
      font-family: quicksand, sans-serif;
      text-decoration: none;
      color: rgb(0, 0, 0);
      font-size: 1.2rem;
      transition: color 0.5s;
      text-align: center;
      transition: all 0.5s
    }
    
    .iconContainer {
      height:100px;
      width: fit-content;
      margin: auto;
      margin-bottom: 15px;
    }
    .iconContainer img{
      height: 100px;
      width: auto;
    }
    
    .sublink_container:hover {
      border-bottom: 1px solid black;
      border-top: 1px solid black;
      border-radius: 4px;
      filter: invert(1) 
    }
    
    .fadeIn5{
      animation: fadeIn .4s;
      animation-fill-mode: forwards
    }
    
    .fadeIn4{
      animation: fadeIn .6s;
      animation-fill-mode: forwards
    }
    
    .fadeIn3{
      animation: fadeIn .8s;
      animation-fill-mode: forwards
    }
    
    .fadeIn2{
      animation: fadeIn 1s;
      animation-fill-mode: forwards
    }
    
    .fadeIn1{
      animation: fadeIn 1.2s;
      animation-fill-mode: forwards
    }
    
    
    @keyframes fadeIn {
      0% {
        opacity: 0%;
      }
      50% {
        opacity: 40%;
      }
      100% {
        opacity: 100%;
      }
    }
    
    @media screen and (max-width: 1100px) {
      .iconContainer {
        height:50px;
        width: fit-content;
        margin: auto;
        margin-bottom: 15px;
      }
      .iconContainer img{
        height: 50px;
        width: auto;
      }
      }
    </style>
   
    `;
  }
}

customElements.define("subnavbar-item", SubNavbarItem);

class SubNavbarContainer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  getAtt(attr) {
    let attribute = (this.attribute = this.getAttribute(attr));
    return attribute;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
    <div class="sublink_container">
        <slot></slot>
    </div>
   
    <style>
    .sublink_container {
      align-items: center;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
    
    @media screen and (max-width: 1100px) {
      
      .sublink_container{
        display: block;
      }
    
     
      }
    </style>
   
    `;
  }
}

customElements.define("subnavbar-container", SubNavbarContainer);
