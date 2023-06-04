import ListContainerCSS from "./css_components/ListContainer.css" assert { type: "css" };
import ProjectListItemCSS from "./css_components/ProjectListItem.css" assert { type: "css" };

class ListContainer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.adoptedStyleSheets.push(ListContainerCSS);
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
    this.shadowRoot.adoptedStyleSheets.push(ProjectListItemCSS);
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
    
    `;
  }
}

customElements.define("project-listitem", ProjectListItem);
