// import styles from "./css_components/Footer.css" assert { type: "css" };

class Footer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    // this.shadowRoot.adoptedStyleSheets.push(styles);
  }

  getAtt(attr) {
    let attribute = (this.attribute = this.getAttribute(attr));
    return attribute;
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
    <footer>
    <div class="info1_container"> <p class="info1">
    Facultad de Humanidades y Ciencias de la Educación, Edificio Central <br/>
    Avenida Uruguay 1695 <br/>11200 Montevideo - Uruguay <br/>
    Contacto: rafaelsuarez23@gmail.com</p> </div>
    <div class="info2_container"> <p class="info2">
    Laboratorio de Arqueologí­a y Antropologí­a Biológica <br/>
    Paysandú s/n (entre Tristán Narvaja y D. Fernández Crespo)<br/> 11200 Montevideo - Uruguay <br/>
    Contacto: rafaelsuarez23@gmail.com </p> </div>
    </footer>
    <style>
    footer {
      font-size: smaller;
      margin-top: 50px;
      display: flex;
      flex-direction: row;
      padding: 1%;
      justify-content: space-around;
    }
    
    footer div p {
      font-family: raleway, sans-serif;
    }
    
    </style>
    `;
  }

  disconnectedCallback() {
    //implementation
  }

  attributeChangedCallback(name, oldVal, newVal) {
    //implementation
  }

  adoptedCallback() {
    //implementation
  }
}

window.customElements.define("footer-data", Footer);
