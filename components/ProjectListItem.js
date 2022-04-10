class ListContainer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.ref = this.getAttribute("ref");
  }

  getAtt(attr) {
    let attribute = (this.attribute = this.getAttribute(attr));
    return attribute;
  }

  handleEvent(event) {
    console.log(event);
    if (event.type === "click") this.display_more();
  }

  display_more() {
    let btn = this.shadowRoot.getElementById("toggler_img");

    this.shadowRoot
      .getElementById("listContainer")
      .classList.toggle("expanded");
    btn.classList.toggle("less"); //to rotate the arrow

    if (!btn.classList.contains("less")) {
      document.getElementById(this.ref).scrollIntoView(true);
    }
  }

  connectedCallback() {
    this.render();
    this.btn = this.shadowRoot.getElementById("btn");
    this.btn.addEventListener("click", this);
  }

  render() {
    this.shadowRoot.innerHTML = `
    <div class="wrapper">
      <div class="list-container" id="listContainer">
            <slot></slot>
        </div>

      <div id="btn" class="toggler_button" type="button">
        <img class="" id="toggler_img" src="./media/icons/bottom-arrow-angle.png" alt="toggler icon">
      </div>

    </div>
    <style>

    .wrapper{
      background-color: rgba(56, 20, 0, 0.5);
      width: 100%;
      margin: auto;
      margin-bottom: 1em;
      border-radius: 4px;
      padding-bottom: 1em;
    }

    .list-container {
      height: 400px;
      overflow: hidden;

    }
    
    .toggler_button {
      width: 30px;
      margin: auto;
      margin-top: 20px;
    }
    
    #toggler_img {
      width: 100%;
      border-radius: 4px;
      cursor: pointer;
      padding: 10px;
      background-color: rgba(255, 255, 255, 0.644);
      transition: all 0.2s;
      box-shadow: 4px 4px 2px rgba(0, 0, 0, 0.604);
    }
    
    #toggler_img:hover {
      box-shadow: 8px 8px 2px rgba(0, 0, 0, 0.304);
    }

    .expanded {
      animation: expand 1s;
      animation-fill-mode: forwards;
      filter: none;
    }

    .less {
      transform: rotate(180deg);
    }

    @keyframes expand {
      0%{
        height: 400px
      }
      50%{
        height: 600px
      }
      100% {
        height:auto;
      }
    }
    </style>
    
    `;
  }
}

customElements.define("list-container", ListContainer);

class ProjectListItem extends HTMLElement {
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
    let name = this.getAtt("name");
    let src = this.getAtt("src");
    let date = this.getAtt("date");

    this.shadowRoot.innerHTML = `
    <div class="link-container">
      <a href=${src}>
        <p id="date">${date}</p>
        <p id="name">${name}</p>
      </a>
    </div>
    
    <style>

      .link-container{
        transition: .5s all;
        padding: 1em;
      }

      .link-container:hover {
        background-color: rgba(56, 20, 0, 0.8);
      }

      .link-container a{
        text-decoration: none;
        color: #fff;
        font-size: 1.3rem;
        hyphens: auto;
      }

      a p{
        font-family: quicksand;
      }

      #date{
        font-family: quicksand;
        margin: 0;
        width: fit-content;
        color: white;
        font-weight: bolder;
        border-radius: 4px;
      }

      @media screen and (max-width: 1100px) {
        #date{
          font-weight: 100;
          padding: 1%
        }
      
      }
    </style>
    `;
  }
}

customElements.define("project-listitem", ProjectListItem);
