import styles from "./css_components/Navbar.css" assert { type: "css" };

class Navbar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.adoptedStyleSheets.push(styles);
  }

  checkActive(section, atribute) {
    let status;
    section === atribute ? (status = "active") : (status = "show");
    return status;
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
    <nav id="navBar">
    <div class="nav-content">
      <div class="logo">
        <a href="#">PIPTU</a>
      </div>
      <div class="nav-links">
        <div class" ${this.checkActive(
          "home",
          atribute
        )}"><a href="/index.html">INICIO</a></div>
        <div class="menu ${this.checkActive(
          "aboutUs",
          atribute
        )}"><a href="/aboutUs.html">SOBRE NOSOTROS</a>
        <div class="sub_menu">
        <a class="sub_menu_link" href="/aboutUs.html#quienes">QUIÉNES SOMOS</a>
        <a class="sub_menu_link" href="/aboutUs.html#que-hacemos">QUÉ HACEMOS</a>
        <a class="sub_menu_link" href="/aboutUs.html#projectslist">PROYECTOS DE INVESTIGACIÓN</a>
        </div>        
        </div>
        <div class="menu ${this.checkActive(
          "investigations",
          atribute
        )}"><a href="/investigations.html">INVESTIGACIONES</a>
        <div class="sub_menu">
        <a class="sub_menu_link" href="/investigations.html#investigationPaths">LÍNEAS DE INVESTIGACIÓN</a>
        <a class="sub_menu_link" href="/investigations.html#poulationModel">MODELO DE POBLAMIENTO</a>
        <a class="sub_menu_link" href="/investigations.html#sites">SITIOS</a>
        <a class="sub_menu_link" href="/investigations.html#map">MAPA DE SITIOS ARQUEOLÓGICOS</a>
        </div>
        </div>
        <div class="menu ${this.checkActive(
          "interactive",
          atribute
        )}"><a href="/interactive.html">PREHISTORIA INTERACTIVA</a>
    <div class="sub_menu">
        <a class="sub_menu_link" href="/interactive.html#fauna">FAUNA</a>
        <a class="sub_menu_link" href="/interactive.html#projectiles">PUNTAS DE PROYECTIL</a>
        <a class="sub_menu_link" href="/interactive.html#models3d">MODELOS 3D</a>
        </div>    
    </div>
        <div class="menu ${this.checkActive(
          "publications",
          atribute
        )}"><a href="/publications.html">PUBLICACIONES</a>
    <div class="sub_menu">
        <a class="sub_menu_link" href="/publications.html#articles">ARTÍCULOS CIENTÍFICOS</a>
        <a class="sub_menu_link" href="/publications.html#books">LIBROS</a>
        <a class="sub_menu_link" href="/publications.html#bookChapters">CAPÍTULOS DE LIBROS</a>
        <a class="sub_menu_link" href="/publications.html#press">PRENSA</a>
        <a class="sub_menu_link" href="/publications.html#networks">REDES SOCIALES</a>
        </div>    
    </div>
        <div class="menu ${this.checkActive(
          "gallery",
          atribute
        )}"><a href="/gallery.html">GALERÍA DE FOTOS</a>
    <div class="sub_menu">
        <a class="sub_menu_link" href="/gallery.html#sites">SITIOS</a>
        <a class="sub_menu_link" href="gallery.html#labWork">TRABAJO DE GABINETE
        Y CONSERVACIÓN</a>
        <a class="sub_menu_link" href="/gallery.html#difusion">DIFUSIÓN Y EXTENSIÓN</a>
        <a class="sub_menu_link" href="/gallery.html#teaching">DOCENCIA / ENSEÑANZA</a>
        </div>
    </div>
      </div>
    </div>

    
    <div class="responsive_navbar" id="responsive_sticky">
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
      )}"><a href="/gallery.html">GALERÍA DE FOTOS</a></div>
    </div>
    <i id="toggler" class="icon"><img src="media/icons/square.png" alt="menu toggler"></i>
  </div>
  </nav>
    `;
    this.button = this.shadowRoot.getElementById("toggler");
    this.button.addEventListener("click", this);

    this.nav = this.shadowRoot.getElementById("navBar");
    this.respNav = this.shadowRoot.getElementById("responsive_sticky");
    this.sticky = this.nav.offsetTop;

    window.onscroll = () => {
      if (window.scrollY > this.sticky) {
        this.nav.classList.add("sticky");
        this.respNav.classList.add("sticky");
      } else {
        this.nav.classList.remove("sticky");
        this.respNav.classList.remove("sticky");
      }
    };
  }
}

customElements.define("nav-bar", Navbar);
