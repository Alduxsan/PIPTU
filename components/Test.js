class Test extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get observedAttributes() {
    return ["text", "granTexto"];
  }

  attributeChangedCallback(name, old, now) {
    console.log(`El atributo ${name} ha sido modificado de ${old} a ${now}.`);
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
    <label for="fname">Texto:</label><br>
    <input type="text" id="fname" name="fname"><br>
    <h1> </h1>
    <style>
    </style>
    `;
  }
}

customElements.define("test-test", Test);
