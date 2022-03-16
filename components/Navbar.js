import { Navbar_css } from "../css/css_components.js";

class Navbar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  checkActive(section, atribute) {
    if (section === atribute) {
      return "hide";
    } else {
      return "show";
    }
  }

  static get styles() {
    return Navbar_css;
  }
  handleEvent(event) {
    console.log(event);
    if (event.type === "click") this.showMenu();
  }
  showMenu() {
    this.toggler = this.shadowRoot.getElementById("toggler");
    this.responsive = this.shadowRoot.getElementById("responsive_nav-links");

    this.responsive.classList.toggle("hide");
    this.toggler.classList.toggle("rotate");
  }

  connectedCallback() {
    let atribute = (this.atribute =
      this.getAttribute("atribute") ?? "valor default"); //en caso de que no venga un atributo (con key atribute) pondrá este valor default
    this.render(atribute);
  }

  render(atribute) {
    this.shadowRoot.innerHTML = `
    <nav>
    <div class="nav-content">
      <div class="logo">
        <a href="#">PIPTU</a>
      </div>
      <div class="nav-links">
        <div class" ${this.checkActive(
          "home",
          atribute
        )}"><a href="/index.html">INICIO</a></div>
        <div class=" ${this.checkActive(
          "aboutUs",
          atribute
        )}"><a href="/aboutUs.html">SOBRE NOSOTROS</a></div>
        <div class=" ${this.checkActive(
          "investigations",
          atribute
        )}"><a href="/investigations.html">INVESTIGACIONES</a></div>
        <div class=" ${this.checkActive(
          "interactive",
          atribute
        )}"><a href="/interactive.html">PREHISTORIA INTERACTIVA</a></div>
        <div class=" ${this.checkActive(
          "publications",
          atribute
        )}"><a href="/publications.html">PUBLICACIONES</a></div>
        <div class=" ${this.checkActive(
          "gallery",
          atribute
        )}"><a href="/difusion.html">GALERÍA DE FOTOS</a></div>
      </div>
    </div>

    <div class="responsive_navbar">
    <div class="logo">
      <a href="#">PIPTU</a>
    </div>
    <div id="responsive_nav-links" class="nav-links hide">
      <div class="link_container ${this.checkActive(
        "home",
        atribute
      )}"><a href="/index.html">INICIO</a></div>
      <div class="link_container ${this.checkActive(
        "aboutUs",
        atribute
      )}"><a href="/aboutUs.html">SOBRE NOSOTROS</a></div>
      <div class="link_container ${this.checkActive(
        "investigations",
        atribute
      )}"><a href="/investigations.html">INVESTIGACIONES</a></div>
      <div class="link_container ${this.checkActive(
        "interactive",
        atribute
      )}"><a href="/interactive.html">PREHISTORIA INTERACTIVA</a></div>
      <div class="link_container ${this.checkActive(
        "difusion",
        atribute
      )}"><a href="/publications.html">PUBLICACIONES</a></div>
      <div class="link_container ${this.checkActive(
        "gallery",
        atribute
      )}"><a href="/difusion.html">GALERÍA DE FOTOS</a></div>
    </div>
    <i id="toggler" class="icon"><img src="media/icons/square.png"></i>
  </div>
  </nav>
   
    <style>
    ${Navbar.styles}
    </style>
   
    `;
    this.button = this.shadowRoot.getElementById("toggler");
    this.button.addEventListener("click", this);
  }
}

customElements.define("nav-bar", Navbar);
{
  /* <a href="#home" class="active">${this.atributo}</a> */
}
