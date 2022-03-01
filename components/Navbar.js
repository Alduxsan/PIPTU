import { Navbar_css } from "../css/css_components.js";

class Navbar extends HTMLElement {
  constructor() {
    super();
  }

  checkActive(section, atribute){
    if (section === atribute){
      return "active"
    }
  }

  static get styles() {
    return Navbar_css;
  }

  connectedCallback() {
    let atribute = this.atribute = this.getAttribute("atribute") ?? "valor default"; //en caso de que no venga un atributo (con key atribute) pondrá este valor default
    this.render(atribute);
  }

  render(atribute) {
    this.innerHTML = `
    <div class="topnav" id="navbar">
      <div class="link_container ${this.checkActive("home",atribute)}"><a href="/index.html">INICIO</a></div>
      <div class="link_container ${this.checkActive("aboutUs",atribute)}"><a href="/aboutUs.html">SOBRE NOSOTROS</a></div>
      <div class="link_container ${this.checkActive("investigations",atribute)}"><a href="/investigations.html">INVESTIGACIONES</a></div>
      <div class="link_container ${this.checkActive("interactive",atribute)}"><a href="/interactive.html">PREHISTORIA INTERACTIVA</a></div>
      <div class="link_container ${this.checkActive("difusion",atribute)}"><a href="/difusion.html">DIFUSIÓN</a></div>
      <div class="link_container ${this.checkActive("gallery",atribute)}"><a href="/difusion.html">GALERÍA DE FOTOS</a></div>
    </div>
   
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
