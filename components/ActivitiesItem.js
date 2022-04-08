class ActivitiesItem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  getAtt(attr) {
    let attribute = (this.attribute = this.getAttribute(attr) ?? "");
    return attribute;
  }

  setImage(img) {
    this.shadowRoot.getElementById(
      "img-container"
    ).style.backgroundImage = `url(${img})`;
  }

  render() {
    let title = this.getAtt("title");
    let text = this.getAtt("text");

    this.shadowRoot.innerHTML = `
    <article>
    <div class="activities_item_container">
        <div class="imgContainer" id="img-container">
          <p id="activity-title">${title}</p>
        </div>
        <div class="activity_text_container">
            <p>${text}</p>            
        </div>
    </div>
    </article>
    <style>
    @font-face {
      font-family: quicksand;
      src: url("../fonts/Quicksand/Quicksand-VariableFont_wght.ttf");
    }
      .activities_item_container{
        margin-bottom: 20px
      }
    
      .imgContainer{
        width: 100%;
        height: 400px;
        background-size: cover;
        background-attachment: fixed;
        border-radius: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    
      #activity-title{
        font-family: "quicksand", sans-serif;
        font-size: 2.5rem;
        font-weight: bolder;
        color: white;
        text-shadow: 1px 1px 1px rgb(0, 0, 0);
        text-align: center;
        background-color: rgba(0, 0, 0, 0.3);
        width: 100%;
        backdrop-filter: blur(5px);
        padding: 2%;
      }
    
      .activity_text_container{
        padding: 4%;
        background: rgba(255, 255, 255, 0.5); 
        border-radius: 4px;
        margin-top: 10px;
      }
    
      .activity_text_container p{
        font-family: quicksand, sans-serif;
        font-size: 1.3rem;
        font-weight: 200;
        column-count: 2;
        column-gap: 3%;
        text-align: justify;
        text-justify: distribute;
        hyphens: auto;
      }
    
      @media screen and (max-width: 1100px) {
        #activity-title{
          font-size: 1.5rem;
        }
    
      .activity_text_container p{
        text-align: left;
        word-break: normal;
        column-count: 1
      }
        }
    </style>
    `;
  }

  connectedCallback() {
    let imgPath = this.getAtt("imgPath");
    this.render();
    this.setImage(imgPath);
  }
}

customElements.define("activities-item", ActivitiesItem);
