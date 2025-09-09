import { dataRequest } from "../js/data_source.js"; 
// import styles from "./css_components/News.css" assert { type: "css" };

class News extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    // this.shadowRoot.adoptedStyleSheets.push(styles);
  }

  getAtt(attr) {
    let attribute = (this.attribute = this.getAttribute(attr));
    return attribute;
  }
  newCard(imgPath, title, date, content, id, url) {
    let news = document.createElement("div");
    let infoContainer = document.createElement("div");

    news.id = `${id}`;
    news.classList.add("news");
    infoContainer.classList.add("infoContainer");

    let newsTitle = document.createElement("h2");
    newsTitle.classList.add("newsTitle");
    newsTitle.innerHTML = `${title}`;
    let newsDate = document.createElement("h4");
    newsDate.classList.add("newsDate");
    newsDate.innerHTML = `${date.getDate()} / ${
      date.getMonth() + 1
    } / ${date.getFullYear()}`;
    let newsImgContainer = document.createElement("div");
    newsImgContainer.classList.add("newsImgContainer");
    let newsImg = document.createElement("img");
    newsImg.classList.add("newsImg");
    newsImg.src = `${imgPath}`;
    let newsContent = document.createElement("p");
    newsContent.classList.add("newsContent");
    newsContent.innerHTML = `${content}`;

    let newsUrl = document.createElement("a");
    newsUrl.classList.add("newsUrlLink")
    newsUrl.textContent = 'Link a la noticia';
    newsUrl.href = `${url}`;


    newsImgContainer.appendChild(newsImg);
    infoContainer.appendChild(newsDate);

    infoContainer.appendChild(newsTitle);
    infoContainer.appendChild(newsContent);
    infoContainer.appendChild(newsUrl);
    news.appendChild(newsImgContainer);
    news.appendChild(infoContainer);
    return news;
  }

  async newsAssembler(id, hostID) {
    const newsContainer = this.shadowRoot.getElementById(hostID);

    const fragment = new DocumentFragment();
    const data = await dataRequest(id);

    let newsList = JSON.parse(data);
    await newsList.map((news) => {
      fragment.append(
        this.newCard(
          news.imgPath,
          news.title,
          new Date(news.date),
          news.content,
          news.id,
          news.url
        )
      );
    });
    return newsContainer.appendChild(fragment);
  }

  render() {
    this.shadowRoot.innerHTML = `
        
    <div class="news_container" id="newsContainer"></div>
    <style>
    @font-face {
      font-family: raleway;
      src: url("../fonts/Raleway/Raleway-Regular.ttf");
      font-display: swap;
    }
    
    @font-face {
      font-family: oswald;
      src: url("../fonts/Oswald/Oswald-Regular.ttf");
      font-display: swap;
    }
    
    :root {
      --text-font-size: 1.4rem;
      --section-title-size: calc(1.3rem + 3.6vw);
      --arrow-title-size: 3rem;
      --basic-font: raleway, "sans-serif";
      --title-font: oswald, "sans-serif";
      text-overflow: ellipsis;
    }
    
    .news {
      padding: 1%;
      display: flex;
      flex-direction: row;
      gap: 10px;
      background-color: rgba(240, 248, 255, 0.3);
    }
    
    .newsImgContainer {
      width: 100%;
    }
    .newsImgContainer img {
      width: 100%;
      border-radius: 6px;
      box-shadow: 2px 2px rgba(0, 0, 0, 0.192);
    }
    
    .infoContainer {
      font-family: raleway;
      padding: 0px 10px 10px 10px;
    }
    
    .newsTitle {
      font-family: oswald;
    }
    
    .newsContent {
      font-size: var(--text-font-size);
    }
    
    .newsDate {
      font-family: oswald;
      margin: 0;
    }

    .newsUrlLink {
    font-family: oswald;
      margin: 0;
    }   

    
    </style>
    `;
  }

  connectedCallback() {
    this.render();
    this.newsAssembler("news", "newsContainer");
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

window.customElements.define("piptu-news", News);
