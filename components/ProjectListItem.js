class ListContainer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  getAtt(attr) {
    let attribute = (this.attribute = this.getAttribute(attr));
    return attribute;
  }

  handleEvent(event) {
    if (event.type === "click") this.display_more();
  }

  display_more() {
    let btnMore = this.shadowRoot.getElementById("togglerMore");
    let btnLess = this.shadowRoot.getElementById("toggleLess");
    let projects = document.querySelectorAll(".project");

    this.shadowRoot
      .getElementById("listContainer")
      .classList.toggle("expanded");
    btnMore.classList.toggle("hide");
    btnLess.classList.toggle("hide");

    if (btnLess.classList.contains("hide")) {
      document.getElementById("finished").scrollIntoView(true);
    }

    projects.forEach(function (project) {
      project.classList.toggle("hiddenList");
    });
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
        <p class="ToggleBtn" id="togglerMore">mostrar todos</p>
        <p class="ToggleBtn hide" id="toggleLess">cerrar lista</p>
      </div>

    </div>
    <style>
    
    .expanded {
      animation: expand 2s;
      animation-fill-mode: forwards;
    }
    
    .hide{
      display:none;
    }
    
    .toggler_button {
      width: fit-content;
      margin: auto;
      margin-top: 20px;
      padding-bottom: 2em;
    }
    
    .ToggleBtn {
      text-align: center;
      border-radius: 4px;
      cursor: pointer;
      padding: 10px;
      background-color: rgba(255, 255, 255, 0.644);
      transition: all 0.2s;
      box-shadow: 4px 4px 2px rgba(0, 0, 0, 0.604);
    }
    
    .ToggleBtn:hover {
      box-shadow: 8px 8px 2px rgba(0, 0, 0, 0.304);
    }
    
    @keyframes expand {
      from{opacity:0}
      to{opacity: 1}
    }
 
    .wrapper{
      background-color: rgba(56, 20, 0, 0.5);
      width: 100%;
      margin: auto;
      margin-bottom: 1em;
      padding-bottom: 1em;
    }

    .toggler_button {
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

    </style>
    
    `;
  }
}

customElements.define("list-container", ListContainer);

class ProjectListItem extends HTMLElement {
  constructor() {
    super();
    if (!this.classList.contains("show")) {
      this.classList.add("hiddenList", "project");
    }
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
    :host-context(.hiddenList){
      display: none;
    }
      .link-container{
        transition: .5s all;
        padding: 10px 5em ;     
      }
      .link-container:hover {
        background-color: rgba(56, 20, 0, 1);
      }

      .link-container a{
        text-decoration: none;
        color: #fff;
        font-size: 1.3rem;
        hyphens: auto;
      }

      a p{
        font-family: raleway;
      }

      #date{
        font-family: raleway;
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
