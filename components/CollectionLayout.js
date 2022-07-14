import { collectionRequest } from "../js/data_source.js";

const topSvg = ` <svg class="top-wave-separator" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
<path fill="#c0a342" fill-opacity="1" d="M0,320L11.4,314.7C22.9,309,46,299,69,261.3C91.4,224,114,160,137,117.3C160,75,183,53,206,64C228.6,75,251,117,274,112C297.1,107,320,53,343,53.3C365.7,53,389,107,411,160C434.3,213,457,267,480,245.3C502.9,224,526,128,549,117.3C571.4,107,594,181,617,208C640,235,663,213,686,176C708.6,139,731,85,754,74.7C777.1,64,800,96,823,96C845.7,96,869,64,891,80C914.3,96,937,160,960,176C982.9,192,1006,160,1029,138.7C1051.4,117,1074,107,1097,85.3C1120,64,1143,32,1166,69.3C1188.6,107,1211,213,1234,213.3C1257.1,213,1280,107,1303,80C1325.7,53,1349,107,1371,144C1394.3,181,1417,203,1429,213.3L1440,224L1440,0L1428.6,0C1417.1,0,1394,0,1371,0C1348.6,0,1326,0,1303,0C1280,0,1257,0,1234,0C1211.4,0,1189,0,1166,0C1142.9,0,1120,0,1097,0C1074.3,0,1051,0,1029,0C1005.7,0,983,0,960,0C937.1,0,914,0,891,0C868.6,0,846,0,823,0C800,0,777,0,754,0C731.4,0,709,0,686,0C662.9,0,640,0,617,0C594.3,0,571,0,549,0C525.7,0,503,0,480,0C457.1,0,434,0,411,0C388.6,0,366,0,343,0C320,0,297,0,274,0C251.4,0,229,0,206,0C182.9,0,160,0,137,0C114.3,0,91,0,69,0C45.7,0,23,0,11,0L0,0Z"></path>
</svg>`;
const bottomSvg = `<svg class="bottom-wave-separator" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
<path fill="#c0a342" fill-opacity="1"
  d="M0,128L48,149.3C96,171,192,213,288,202.7C384,192,480,128,576,128C672,128,768,192,864,234.7C960,277,1056,299,1152,266.7C1248,235,1344,149,1392,106.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
</path>
</svg>`;

class CollectionLayout extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });

    this.collectionID = this.hasAttribute("collectionID")
      ? this.getAttribute("collectionID")
      : this.setAttribute("collectionID", "empty");
  }

  display_more(subcollectionID) {
    let gallery = this.shadowRoot.getElementById(subcollectionID);
    let btnMore = this.shadowRoot.getElementById(
      "togglerMore" + subcollectionID
    );
    let btnLess = this.shadowRoot.getElementById(
      "toggleLess" + subcollectionID
    );
    gallery.classList.toggle("expand");
    btnMore.classList.toggle("hide");
    btnLess.classList.toggle("hide");

    if (btnLess.classList.contains("hide")) {
      this.shadowRoot.getElementById(subcollectionID).scrollIntoView(true);
    }
  }

  photoItemTemplate(imgPath, name) {
    const div = document.createElement("div");
    return (div.innerHTML = `
         <div class="item-container">
            <div class="gallery-item">
              <div class="image">
                 <a target="_blank" rel="noopener" href="${imgPath}">
                   <img src="${imgPath}" alt="${name}" loading="lazy">
                 </a>
              </div>
            </div>
         </div>
        `);
  }

  subcollectionTitle(title) {
    let div = document.createElement("div");
    div.classList.add("gallery-subtitle");
    div.innerHTML = `<p>${title}</p>`;
    return div;
  }

  async requestCollection(collectionID) {
    try {
      const data = JSON.parse(await collectionRequest(collectionID));
      return data;
    } catch (err) {
      console.log(err);
    }
  }

  collectionAssembling(collectionID) {
    const gallery = this.shadowRoot.getElementById("gallery-container");

    this.requestCollection(collectionID).then((collection) => {
      for (const subcollection in collection) {
        const { imgPaths, name } = collection[subcollection];

        const grid_container = document.createElement("div");

        const expandButton = document.createElement("div");
        expandButton.classList.add("toggler_button");
        expandButton.setAttribute("type", "button");
        expandButton.setAttribute("id", "btn" + subcollection);

        expandButton.innerHTML = `
        <p class="ToggleBtn" id="togglerMore${subcollection}"> MOSTRAR MÁS</p>
        <p class="ToggleBtn hide" id="toggleLess${subcollection}">CONTRAER</p>`;

        const assembled_collection = document.createElement("div");
        assembled_collection.classList.add("subcollection_container");
        assembled_collection.setAttribute("id", subcollection);

        const photoItem_factory = imgPaths.map((path) => {
          return this.photoItemTemplate(path, name);
        });
        assembled_collection.innerHTML += photoItem_factory.join("");
        expandButton.addEventListener("click", () =>
          this.display_more(subcollection)
        );
        grid_container.appendChild(this.subcollectionTitle(name));
        grid_container.appendChild(assembled_collection);
        grid_container.appendChild(expandButton);

        gallery.appendChild(grid_container);
      }
    });
  }

  getAtt(attr) {
    let attribute = (this.attribute = this.getAttribute(attr) ?? "none");
    return attribute;
  }

  connectedCallback() {
    this.render();
    this.btn = this.shadowRoot.getElementById("btn");
    this.collectionAssembling(this.collectionID);
  }

  render() {
    this.shadowRoot.innerHTML = `
    <div class="collection_wrapper">
    ${topSvg}         
        <div id="gallery-container">
      </div>   
    ${bottomSvg}
    </div>

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

    #gallery-container {
      height:auto
      overflow: hidden;
    }

    .collection_wrapper {
      position:relative;
      background-color: rgba(38, 14, 0, 0.578);
      height: fit-content;
      padding: 1em 2em;
      padding-bottom: 4em;
    }
    
    .subcollection_container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      grid-auto-rows: 400px;
      grid-gap: 10px;
      grid-auto-flow: dense;
      height: 400px;
      overflow: hidden;
    }

    .expand{
      height: fit-content
    }

    
    .gallery-subtitle {
      margin: auto;
    }
    
    .gallery-subtitle p {
      font-weight: 600;
      text-align: center;
      font-family: var(--title-font);
      font-size: calc(1rem + 2.6vw);
      color: #260e00;
    }

    .toggler_button {
      width: fit-content;
      margin: auto;
      margin-top: 20px;
      padding-bottom: 2em;
    }
    
    .ToggleBtn {
      text-align: center;
      border-radius: 4px;
      cursor: pointer;
      padding: 10px;
      background-color: rgba(255, 255, 255, 0.644);
      transition: all 0.2s;
      box-shadow: 4px 4px 2px rgba(0, 0, 0, 0.604);
    }
    
    .ToggleBtn:hover {
      box-shadow: 8px 8px 2px rgba(0, 0, 0, 0.304);
    }

    .hide{
      display: none;
    }

    /* ----------- PhotoItem --------- */
    .item-container{
             width: 100%;
             height: 100%;
             overflow: hidden;
             border-radius: 4px;
           }
                .gallery-item {
             width: 100%;
             height: 100%;
             position: relative;
             background: no-repeat url("/media/icons/photo_loading.png");
             background-size: 30%;
             border-radius: 4px;
             background-position: center;
           }
          .gallery-item .image {
             width: 100%;
             height: 100%;
             overflow: hidden;
             border-radius: 4px;
           }
           .image img {
             width: 100%;
             height: 100%;
             object-fit: cover;
             object-position: 50% 50%;
             cursor: pointer;
             border-radius: 4px;
             transition: 0.5s ease-in-out;
           }
      
           .gallery-item:hover .image img {
             transform: scale(1.5);
      
           }
      
           .gallery-item .text {
             opacity: 0;
             position: absolute;
             bottom: 10%;
             left: 50%;
             transform: translate(-50%, -50%);
             color: #fff;
             font-size: 25px;
             pointer-events: none;
             z-index: 4;
             transition: 0.3s ease-in-out;
             -webkit-backdrop-filter: blur(5px) saturate(1.8);
             backdrop-filter: blur(5px) saturate(1.8);
             text-align: center;
           }
            gallery-item:hover .text {
             opacity: 1;
             animation: move-down 0.3s linear;
             padding: 1em;
             width: 100%;
           }

           @media screen and (max-width: 1100px) {
            .collection_wrapper {
              padding: 1em 5px
            }
            }
          
           
    </style>
    `;
  }
}

customElements.define("collection-layout", CollectionLayout);
