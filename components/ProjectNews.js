class ProjectNews extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  getAtt(attr) {
    let attribute = (this.attribute = this.getAttribute(attr));
    return attribute;
  }

  showInfo() {
    this.info = this.shadowRoot.getElementById("info");
    this.info.classList.toggle("hide");
    this.info.scrollIntoView({ block: "end", behavior: "smooth" });
  }

  handleEvent(event) {
    console.log(event);
    if (event.type === "click") this.showInfo();
  }

  connectedCallback() {
    this.render();
  }
  render() {
    let date = this.getAtt("date");
    let imgPath = this.getAtt("imgPath");
    let title = this.getAtt("title").toUpperCase();
    let content = this.getAtt("content");

    this.shadowRoot.innerHTML = `

    <div id="container" class="news_container">
      <div class="text-block">
        <p id="date">${date}</p>
        <p id="title">${title}</p>
      </div>
    </div>
    <div id="info" class="news_content hide fromRight">
    <p class="content">
    ${content}
    </p>
    </div>

    <style>
    
    .news_container{
      margin: auto;
      width: 100%;
      height: 500px;
      border-radius: 6px;
      cursor: pointer;
      box-shadow: 2px 1px 2px black;
      transition: all 0.3s
    }
    .news_container:hover{
      box-shadow: 1px 4px 3px black;
    
    }
    
    .text-block {
      font-family: quicksand;
      position: absolute;
      top: 0;
      right: 0;
      background-color: rgba(255, 255, 255, 0.4);
      color: black;
      padding-left: 20px;
      padding-right: 20px;
      border-radius: 0 6px 0 6px;
      box-shadow: 0px 2px 2px black;
    }
    
    #title{
      font-size: 1.5rem;
      font-weight: bold;
      margin: 0px;
    }
    
    #date{
      text-align: right;
      margin: 3px;
    }
    
    .hide{
      display: none
    }
    
    .content{
      margin-top: 5px;
      font-size: 1.5rem;
      padding: 10px;
      background-color: rgba(255, 255, 255, 0.5);
      border-radius: 4px 6px 6px 6px;
    }
    
    img{
        width: 100%;
        border-radius: 4px;
    
      }
    
      .fromRight{
        animation: fromRight .3s;
        animation-fill-mode: forwards
      }
    
      @keyframes fromRight {
        from {
          transform: translateY(2000px);
          opacity: 0
        }
        to {
          transform: translateY(0);
          opacity: 1
        }
      }
    
      @media screen and (max-width: 500px) {
        .text-block {
          border-radius: 4px 6px 0 0;
        }
        #date{
          text-align: left;
        }
    
        #title{
          font-size: 1rem
        }
    
        .content{
          font-size: 1rem;
        }
      }

    .news_container{
      background: no-repeat center url(${imgPath});
      background-size: cover;
    }
    </style>

    `;
    this.card = this.shadowRoot.getElementById("container");
    this.card.addEventListener("click", this);
  }
}

customElements.define("project-news", ProjectNews);
