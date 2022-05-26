class Profiles_container extends HTMLElement {
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
    this.shadowRoot.innerHTML = `
    <div class="profiles_wrapper">
      <slot></slot>
    </div>

    <style>
    .profiles_wrapper {
      padding: 2em 5em;
      display: flex;
      gap: 1em 1em;
      flex-direction: row;
      flex-wrap: wrap;
      margin-top: 20px;
      justify-content: center;
    }

    @media screen and (max-width: 1100px) {
      .profiles_wrapper{
       display: block;
       padding: 5px
      }
      
    }
    </style>
    `;
  }
}

customElements.define("profiles-container", Profiles_container);

class Profiles extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return Profiles_css;
  }

  getAtt(attr) {
    let attribute = (this.attribute = this.getAttribute(attr) || "normal");
    return attribute;
  }

  handleEvent(event) {
    if (event.type === "click") this.showInfo();
  }

  showInfo() {
    this.info = this.shadowRoot.getElementById("detailsContent");
    this.info.classList.toggle("hide");
    this.info.scrollIntoView({ block: "end", behavior: "smooth" });
  }
  connectedCallback() {
    this.render();
    this.card = this.shadowRoot.getElementById("card");
    this.card.addEventListener("click", this);
  }

  render() {
    let img = this.getAtt("img");
    let imgFix = this.getAtt("imgFix");
    let bio = this.getAtt("bio");
    let name = this.getAtt("name");

    this.shadowRoot.innerHTML = `

    <div id="card" class="profile_card">
        
        <div  class="imgNameContainer">
          <div id=${imgFix} class="imgContainer">
            <img src="${img}" loading="lazy" alt="${name}">
          </div>
          <div class="name">
            <p>${name}</p>
          </div>
        </div>
        <div id="detailsContent" class="bio-wrapper hide">
          <p class="bio">${bio}</p>
        </div>

    </div>

      <style>

      #rafael {
        width: 100%;
      }

      #rafael img{
        width: 100%;
      }

      #ref {
        text-decoration: none;
        color: black;
      }
      #ref:hover {
        color: green;
      }

      .hide{
        display: none;
      }

      .profile_card{
        display: flex;
        font-family: raleway, sans-serif;
        justify-content: center;
        transition: box-shadow .5s;
        border-radius: 4px;
        cursor: pointer;
        background: rgba(255, 255, 255, 0.300);
        padding: 1em;
        min-width: 350px;
        min-height: 320px;
      }

      .profile_card:hover{
        box-shadow: 2px 2px 2px 1px
      }
      
      .imgNameContainer{
        min-width: 250px;
        padding-top: 1em
      }

      .imgContainer{
        margin: auto;
        max-width: fit-content;
        height:200px;
        border-radius: 4px;
        overflow: hidden;
        margin-bottom: 1em;
        box-shadow: 1px 2px 2px;
      }
      
      .imgContainer img{
        height: 100%;
      }

      .name{
        font-size: 1.6rem;
        text-align: center;
        margin: 0;
      }

      .bio-wrapper{
        animation: fadeIn 1s;
        animation-fill-mode: forwards;
        padding: 1em 1em
      }
      
      @keyframes fadeIn{
        from{
           opacity: 0
      }

      to{
        opacity: 1
      }
    }

      .bio{
        margin: 0;
        margin-left: 1em;
        font-size: 1.3rem;
        text-align: justify;
        text-justify: distribute;
        hyphens: auto;
      }

      @media screen and (max-width: 1100px) {
        
        .profile_card{
         min-width: 300px;
         padding:0;
         padding-top: 1em;
         display: block;
         border-radius: 0;
         margin: 5px 0;
        }
        .name{
          font-size: 1.5rem
        }
        
        .bio{
          margin: 0;
          text-align: left;
        }
      

      </style>
      `;
  }
}

customElements.define("profile-box", Profiles);
