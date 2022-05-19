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
        )}"><a href="/gallery.html">GALERÍA DE FOTOS</a></div>
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
   
    <style>    
    .sticky{
      position: fixed;
      animation: fromTop 1s;
      animation-fill-mode: forwards
    }
    
    nav {
      top: 0;
      left: 0;
      width: 100%;
      transition: all 0.4s ease;
      z-index: 1;
      background-color: #260E00;
    }
    
    nav .nav-content {
      text-align: center;
      margin: auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px;
    }
    nav .logo a {
      text-decoration: none;
      font-size: 35px;
      color: white;
      padding: 5px;
    }
    nav.sticky .logo a {
      color: white;
    }
    .nav-content .nav-links {
      align-items: center;
      display: flex;
      justify-content: space-around;
    }
    
    .nav-content .nav-links div {
      list-style: none;
      margin:15px;
    }
    
    .nav-links div a {
      font-family: raleway;
      text-decoration: none;
      color: white;
      font-size: 1.4rem;
      font-weight: 100;
      transition: all 0.3s ease;
    }
    
    .nav-links div a:hover {
      transition: .2s all;
      color: #ab8400;    
    }
    
    .hide {
    display:none;
     }
    
     .responsive_navbar{
      top: 0;
      left: 0;
      width: 100%;
      transition: all 0.4s ease;
      z-index: 1;
      background-color: rgb(38 14 0);
      display: none;
      justify-content: space-around;
      align-items: center;
      padding-top: 10px;
      padding-bottom: 10px;
      
    }
    
     .responsive_navbar .nav-links {
      font-family: raleway;
      text-align: center;
      font-size: 1rem;
    }
    
    .nav-links div a{
      font-size: 1rem;
    }
    
    .icon{
      width: 40px;
      height: fit-content;
      cursor: pointer;
      animation: fadeIn .5s;
      animation-fill-mode: forwards
    }
    
    .icon img{
      width: 100%;
      height: auto;
      filter: invert(1)
    }
    
    .rotate{
      animation: rotation .5s;
      animation-fill-mode: forwards
    }
    
    @keyframes rotation {
      from {
        transform: rotate(0deg);
        opacity: 0;
      }
      to {
        transform: rotate(90deg);
        opacity: 1;
      }
    }
    
    @keyframes fadeIn {
      from {
        transform: translate(2000px);
      }
      to {
        transform: translate(0);
      }
    }
    @media screen and (max-width: 1100px) {
      
      .responsive_navbar{
        display:flex;
      }
    
      .responsive_navbar .logo a{
        font-size: 20px
      }
    
      nav .nav-content {
        display: none;
      }
      
      .link_container{
        margin-bottom: 10px;
      }
    }
    
    @keyframes fromTop {
      from {
        transform: translateY(-2000px);
        opacity: 0;
      }
      to {
        transform: translate(0);
        opacity: 1
      }
    }
    </style>
   
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
