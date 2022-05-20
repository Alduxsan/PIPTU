class ActivitiesItem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  getAtt(attr) {
    let attribute = (this.attribute = this.getAttribute(attr) ?? "");
    return attribute;
  }

  // setImage(img) {
  //   this.shadowRoot.getElementById(
  //     "img-container"
  //   ).style.backgroundImage = `url(${img})`;
  // }

  connectedCallback() {
    this.render();
  }

  render() {
    let title = this.getAtt("title");
    let imgPath = this.getAtt("imgPath");
    let text = this.getAtt("text");

    this.shadowRoot.innerHTML = `
    <article>
    <div class="activities_item_container">
        <div class="imgContainer" id="img-container">
          <img src="${imgPath}" loading="lazy" alt="${title}"/>
          <p id="activity-title">${title}</p>
        </div>
        <div class="activity_text_container">
            <p>${text}</p>            
        </div>
    </div>
    </article>
    <style>
      .activities_item_container{
        margin-bottom: 20px;
        overflow: hidden
      }
    
      .imgContainer{
        width: 100%;
        height: 400px;
        border-radius: 4px;
        position: relative;
        border-radius: 4px
      }
      .imgContainer img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 4px
      }
    
      #activity-title{
        font-family: raleway, sans-serif;
        font-size: 2rem;
        font-weight: bolder;
        color: white;
        text-shadow: 1px 1px 1px rgb(0, 0, 0);
        text-align: center;
        background-color: rgba(0, 0, 0, 0.5);
        width: 100%;
        padding: 1em;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    
      .activity_text_container{
        padding: 2em;
        background: rgba(255, 255, 255, 0.5); 
        border-radius: 4px;
        margin-top: 10px;
      }
    
      .activity_text_container p{
        font-family: raleway, sans-serif;
        font-size: 1.3rem;
        font-weight: 200;
        column-count: 2;
        column-gap: 1em;
        text-align: justify;
        text-justify: distribute;
        hyphens: auto;
      }
    
      @media screen and (max-width: 1100px) {
        #activity-title{
          font-size: 1.5rem;
        }
    
      .activity_text_container p{
        font-size: 1rem;
        text-align: left;
        word-break: normal;
        column-count: 1
      }

        }
    </style>
    `;
  }
}

customElements.define("activities-item", ActivitiesItem);
