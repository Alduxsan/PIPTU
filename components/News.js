import { dataRequest } from "../js/data_source.js";
import styles from "./css_components/News.css" assert { type: "css" };

class News extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.adoptedStyleSheets.push(styles);
  }

  getAtt(attr) {
    let attribute = (this.attribute = this.getAttribute(attr));
    return attribute;
  }
  newCard(imgPath, title, date, content, id) {
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

    newsImgContainer.appendChild(newsImg);
    infoContainer.appendChild(newsDate);

    infoContainer.appendChild(newsTitle);
    infoContainer.appendChild(newsContent);
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
          news.id
        )
      );
    });
    return newsContainer.appendChild(fragment);
  }

  render() {
    this.shadowRoot.innerHTML = `
        
    <div class="news_container" id="newsContainer"></div>
    
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
