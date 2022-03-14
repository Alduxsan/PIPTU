import { Navbar_css } from "../css/css_components.js";

class Navbar extends HTMLElement {
  constructor() {
    super();
  }

  checkActive(section, atribute) {
    if (section === atribute) {
      return 'class="hide"';
    } else {
      return 'class="show"';
    }
  }

  static get styles() {
    return Navbar_css;
  }

  connectedCallback() {
    let atribute = (this.atribute =
      this.getAttribute("atribute") ?? "valor default"); //en caso de que no venga un atributo (con key atribute) pondrá este valor default
    this.render(atribute);
  }

  render(atribute) {
    this.innerHTML = `
    <nav>
    <div class="nav-content">
      <div class="logo">
        <a href="#">LIPTU logo</a>
      </div>
      <div class="nav-links">
        <div ${this.checkActive(
          "home",
          atribute
        )}><a href="/index.html">INICIO</a></div>
        <div ${this.checkActive(
          "aboutUs",
          atribute
        )}><a href="/aboutUs.html">SOBRE NOSOTROS</a></div>
        <div ${this.checkActive(
          "investigations",
          atribute
        )}><a href="/investigations.html">INVESTIGACIONES</a></div>
        <div ${this.checkActive(
          "interactive",
          atribute
        )}><a href="/interactive.html">PREHISTORIA INTERACTIVA</a></div>
        <div ${this.checkActive(
          "difusion",
          atribute
        )}><a href="/publications.html">PUBLICACIONES</a></div>
        <div ${this.checkActive(
          "gallery",
          atribute
        )}><a href="/difusion.html">GALERÍA DE FOTOS</a></div>
      </div>
    </div>
  </nav>
    <div class="topnav" id="navbar">
   
    <style>
    ${Navbar.styles}
    </style>
   
    `;
  }
}

customElements.define("nav-bar", Navbar);
{
  /* <a href="#home" class="active">${this.atributo}</a> */
}
