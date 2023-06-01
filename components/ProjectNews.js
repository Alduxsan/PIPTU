import { dataRequest } from "../js/data_source.js";

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
    this.info.classList.contains("hideInfo")
      ? this.info.classList.replace("hideInfo", "showInfo")
      : this.info.classList.replace("showInfo", "hideInfo");
    this.info.scrollIntoView({ block: "end", behavior: "smooth" });
  }

  handleEvent(event) {
    console.log(event);
    if (event.type === "click") this.showInfo();
  }

  newCard(imgPath, title, date, content) {
    let newsCard = document.createElement("div");
    newsCard.classList.add("news-card");
    newsCard.innerHTML = `<a href="#" class="news-card__card-link"></a>
    <img src="${imgPath}" alt="${title}" class="news-card__image">
    <div class="news-card__text-wrapper">
      <h3 class="news-card__title">${title}</h3>
      <div class="news-card__post-date">
      ${date.getDate()} / ${date.getMonth() + 1} / ${date.getFullYear()}</div>
      <div class="news-card__details-wrapper">
        <p class="news-card__excerpt">${content}&hellip;</p>
        <a href="#" class="news-card__read-more">Read more <i class="fas fa-long-arrow-alt-right"></i></a>
      </div>
    </div>`;
    return newsCard;
  }

  async newsAssembler(id, hostID) {
    const newsContainer = this.shadowRoot.getElementById(hostID);

    const fragment = new DocumentFragment();
    const data = await dataRequest(id);

    let newsList = JSON.parse(data);
    newsList.map((news) => {
      fragment.append(
        this.newCard(
          news.imgPath,
          news.title,
          new Date(news.date),
          news.content
        )
      );
    });
    return newsContainer.appendChild(fragment);
  }

  connectedCallback() {
    this.render();
    this.newsAssembler("news", "news-container");
  }
  render() {
    this.shadowRoot.innerHTML = `
        <div id="news-container" class="content-wrapper">
  
  </div>
  
  <style>
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Open Sans";
}

body {
  background-color: #555;
}

.content-wrapper {
  margin: 0 auto;
  max-width: 1200px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  padding: 0.5rem;
}

.news-card {
  border: 0px solid aqua;
  margin: 0.5rem;
  position: relative;
  height: 12rem;
  overflow: hidden;
  border-radius: 0.5rem;
  flex: 1;
  min-width: 290px;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);
}

@media (min-width: 900px) {

.news-card {
    height: 20rem
}
  }

.news-card::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0)
      linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.7) 80%);
    z-index: 0;
  }

.news-card__card-link {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    /*     background: rgba(255,0,0,.5); */
  }

.news-card__image {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    transition: transform .5s ease;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    position: relative;
    z-index: -1;
  }

.news-card__text-wrapper {
    position: absolute;
    bottom: 0rem;
    padding: 1rem;
    color: white;
    /*     background-color: rgba(0, 0, 0, 0.4); */
    transition: background-color 1.5s ease;
  }

.news-card__title {
    transition: color .5s ease;
    margin-bottom: 0.5rem;
  }

.news-card__post-date {
    font-size: 0.7rem;
    margin-bottom: 0.5rem;
    color: #ccc;
  }

.news-card__details-wrapper {
    max-height: 0;
    opacity: 0;
    transition: max-height .5s ease, opacity 1s ease;
  }

@media (min-width: 900px) {
    .news-card:hover .news-card__details-wrapper {
      max-height: 20rem;
      opacity: 1;
    }
    .news-card:hover .news-card__text-wrapper {
      background-color: rgba(0, 0, 0, 0.6);
    }
    .news-card:hover .news-card__title {
      color: yellow;
    }
    .news-card:hover .news-card__image {
      transform: scale(1.2);
      z-index: -1;
    }
  }

.news-card__excerpt {
    font-weight: 300;
    text-overflow:ellipsis;

  }

.news-card__read-more {
    background: black;
    color: #bbb;
    display: block;
    padding: 0.4rem 0.6rem;
    border-radius: 0.3rem;
    margin-top: 1rem;
    border: 1px solid #444;
    font-size: 0.8rem;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    text-decoration: none;
    width: 7rem;
    margin-left: auto;
    position: relative;
    z-index: 5;
  }

.news-card__read-more i {
      position: relative;
      left: 0.2rem;
      color: #888;
      transition: left 0.5s ease, color 0.6s ease;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
    }

.news-card__read-more:hover i {
      left: 0.5rem;
      color: yellow;
    }
</style>
  `;
  }
}

customElements.define("project-news", ProjectNews);
