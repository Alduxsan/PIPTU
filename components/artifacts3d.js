class Artifact3D extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    let params = { href_src: "", iframe_src: "", iframe_title: "" };

    params["href_src"] = this.href_src = this.getAttribute("href_src") ?? "";
    params["iframe_src"] = this.iframe_src =
      this.getAttribute("iframe_src") ?? "";
    params["iframe_title"] = this.iframe_title =
      this.getAttribute("iframe_title") ?? "";
    this.render(params);
  }

  render(params) {
    this.shadowRoot.innerHTML = ` 
    <div class="artifactWrapper">
      <div class="sketchfab-embed-wrapper">
      <p class="artifactTitle">
          <a href=${params.href_src} target="_blank" rel="noopener">${params.iframe_title}</a> </p>
        <iframe title=${params.iframe_title} frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src=${params.iframe_src} loading="lazy"></iframe>
         </div> 
         
      <style>
      .artifactWrapper{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-self: center;
        margin: 20px;
        border-radius: 8px;
        padding: 2em;
      }
      
      iframe{
        border-radius: 4px;
        width: 80%;
        height: 400px;
        margin: auto;
        margin-bottom: 15px;
        margin-top: 20px;
        box-shadow: 3px 3px rgba(0, 0, 0, 0.9);
        transition: all .3s;
      }
      
      iframe:hover{
        box-shadow:
          5px 5px 4px rgba(0, 0, 0, 0.9)
      }
      
      .artifactTitle{
        font-family: raleway, sans-serif;
        justify-content: center;
        align-self: center;
        font-size: 13px; 
        font-weight: normal; 
        margin: 5px; 
        color: #000000;
      }
      
      .artifactTitle a{
        font-weight: bold; 
        color: #000000; 
        font-family: raleway, sans-serif;
        text-decoration: none;
        text-align: center;
        font-size: 2rem;
      }
      
      .sketchfab-embed-wrapper{
        text-align: center;
      }
      
      .textFooter{
        font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;
      }
      .textFooter a{
        font-weight: bold; color: #000000; 
      }

      @media screen and (max-width: 1100px) {
         .artifactTitle a{
           font-size: 1.5rem
         }}
      </style>
        `;
  }
}

customElements.define("artifact-3d", Artifact3D);
