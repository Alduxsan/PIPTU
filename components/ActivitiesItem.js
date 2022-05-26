var topSvg = ` <svg class="top-wave-separator" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
<path fill="#c0a342" fill-opacity="1" d="M0,320L11.4,314.7C22.9,309,46,299,69,261.3C91.4,224,114,160,137,117.3C160,75,183,53,206,64C228.6,75,251,117,274,112C297.1,107,320,53,343,53.3C365.7,53,389,107,411,160C434.3,213,457,267,480,245.3C502.9,224,526,128,549,117.3C571.4,107,594,181,617,208C640,235,663,213,686,176C708.6,139,731,85,754,74.7C777.1,64,800,96,823,96C845.7,96,869,64,891,80C914.3,96,937,160,960,176C982.9,192,1006,160,1029,138.7C1051.4,117,1074,107,1097,85.3C1120,64,1143,32,1166,69.3C1188.6,107,1211,213,1234,213.3C1257.1,213,1280,107,1303,80C1325.7,53,1349,107,1371,144C1394.3,181,1417,203,1429,213.3L1440,224L1440,0L1428.6,0C1417.1,0,1394,0,1371,0C1348.6,0,1326,0,1303,0C1280,0,1257,0,1234,0C1211.4,0,1189,0,1166,0C1142.9,0,1120,0,1097,0C1074.3,0,1051,0,1029,0C1005.7,0,983,0,960,0C937.1,0,914,0,891,0C868.6,0,846,0,823,0C800,0,777,0,754,0C731.4,0,709,0,686,0C662.9,0,640,0,617,0C594.3,0,571,0,549,0C525.7,0,503,0,480,0C457.1,0,434,0,411,0C388.6,0,366,0,343,0C320,0,297,0,274,0C251.4,0,229,0,206,0C182.9,0,160,0,137,0C114.3,0,91,0,69,0C45.7,0,23,0,11,0L0,0Z"></path>
</svg>`;
var bottomSvg = `<svg class="bottom-wave-separator" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
<path fill="#c0a342" fill-opacity="1"
  d="M0,128L48,149.3C96,171,192,213,288,202.7C384,192,480,128,576,128C672,128,768,192,864,234.7C960,277,1056,299,1152,266.7C1248,235,1344,149,1392,106.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
</path>
</svg>`;

class ActivitiesItem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  getAtt(attr) {
    let attribute = (this.attribute = this.getAttribute(attr) ?? "");
    return attribute;
  }

  handleEvent(event) {
    if (event.type === "click") this.showInfo();
  }

  showInfo() {
    this.info = this.shadowRoot.getElementById("activity-text");
    this.info.classList.toggle("hide");
    this.info.scrollIntoView({ block: "end", behavior: "smooth" });
  }

  connectedCallback() {
    this.render();
    this.imgContainer = this.shadowRoot.getElementById("img-container");
    this.imgContainer.addEventListener("click", this);
  }

  render() {
    let title = this.getAtt("title");
    let imgPath = this.getAtt("imgPath");
    let text = this.getAtt("text");

    this.shadowRoot.innerHTML = `
    <article>
      <div class="activities_item_container">
          <div class="imgContainer" id="img-container">
            ${topSvg}         
            <img src="${imgPath}" loading="lazy" alt="${title}"/>
            ${bottomSvg}
            
            <div class="title-wrapper">
              <p id="activity-title">${title}</p>
            </div>
          </div>
          <div id="activity-text" class="activity_text_container hide">
              <p>${text}</p>            
          </div>
          
      </div>
      
    </article>

    <style>

    .bottom-wave-separator {
      width: 100%;
      height: 30px;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, 5%);
      z-index: 1;
    }

    .top-wave-separator {
      width: 100%;
      height: 20px;
      position: absolute;
      left: 50%;
      top: 0;
      transform: translate(-50%, -5%);
      z-index: 1;
    }

      .activities_item_container{
        margin-bottom: 1em;
        overflow: hidden
      }
    
      .imgContainer{
        width: 100%;
        height: 400px;
        position: relative;
        cursor: pointer;
        overflow: hidden;
      }

      
      .imgContainer img{
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .title-wrapper{
        background-color: #260E00;
        height: fit-content;
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(0%, -50%);
        border-radius: 0 4px 4px 0
      }

      .title-wrapper p{
        font-family: var(--title-font), sans-serif;
        font-size:calc(2rem + 1.6vw);
        color: white;
        text-align: center;
        margin:10px 10px 10px 40px;
      }

      .imgContainer:hover .title-wrapper{
        animation: centerTitle 1s ease;
        animation-fill-mode: forwards;
      }

      @keyframes centerTitle{
        from{
           width: 80%;
      }

      to{
        width: 100%
      }
    }
    
      .hide{
        display: none
      }

      .activity_text_container{
        padding: 5em;
        border-radius: 4px;
        margin-top: 10px;
      }
    
      .activity_text_container p{
        font-family: raleway, sans-serif;
        font-size: 1.3rem;
        column-count: 2;
        column-gap: 1em;
        text-align: justify;
        hyphens: auto;
        -webkit-hyphens: auto;
      }

      .expanded{
        height
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
