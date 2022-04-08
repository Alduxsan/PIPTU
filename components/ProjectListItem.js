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

    this.shadowRoot.innerHTML = `<div class="link-container">
      <a href=${src}>
        </p><p id="date">
        ${date} <br> ${name}</a>
     </div>
    
    <style>
    .link-container{
      transition: .5s all;
      border-bottom: 1px solid rgba(240, 255, 240, 0.8);
      padding-bottom: 1%;     
    }

    .link-container:hover {
      color: black;
      background-color: rgba(240, 255, 240, 0.8);
      backdrop-filter: blur(2px);
      color: black;
    }

    .link-container a{
      word-break: break-all;
      text-decoration: none;
      color: rgb(231, 231, 231);
      font-size: 1.3rem;
      hyphens: auto;
    }

    .link-container:hover a{
      color: black;
      }

    #date{
      margin: 0;
      width: fit-content;
      color: white;
      font-weight: bolder;
      padding: 2%;
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
