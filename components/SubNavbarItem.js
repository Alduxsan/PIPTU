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
            <p id="section-name">${sectionName.toUpperCase()}</p>
        </a>
    </div>
    <style>
    .sublink_container{
      margin: 15px;
      margin-top: 50px;
      padding: 10px;
      transition: all 0.4s
    }
    
    .sublink {
      font-family: raleway, sans-serif;
      text-decoration: none;
      color: rgb(0, 0, 0);
      font-size: 1.4rem;
      text-align: center;
    }

    #section-name{
      width: fit-content;
      margin: auto;
      padding: 10px;
    }
    
    .iconContainer {
      height:100px;
      width: fit-content;
      margin: auto;
      margin-bottom: 15px;
    }
    
    .iconContainer img{
      height: 100%;
      width: auto;
      transition: all 0.3s;
      padding-top: 10px
    }

    .iconContainer + p{
      border-bottom: 1px solid rgba(0,0,0,0)
    }
    
    a:hover > .iconContainer img {
      animation: lightRotation 0.5s forwards;
      animation-iteration-count: 2
    }

    a:hover > .iconContainer + p{
      font-weight: bolder;
      border-bottom: 1px solid rgba(0,0,0,1)
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
  
  @keyframes lightRotation {
    50% {
      transform: rotate(10deg);
    }
  }
    
    @media screen and (max-width: 1100px) {
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
      align-items: stretch;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      padding-bottom: 5em

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
