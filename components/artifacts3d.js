class Artifact3D extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    let parameters = { href_src: "", iframe_src: "", iframe_title: "" };

    parameters["href_src"] = this.href_src =
      this.getAttribute("href_src") ?? "";
    parameters["iframe_src"] = this.iframe_src =
      this.getAttribute("iframe_src") ?? "";
    parameters["iframe_title"] = this.iframe_title =
      this.getAttribute("iframe_title") ?? "";
    this.render(parameters);
  }

  render(parameters) {
    this.innerHTML = ` 
    <div class="artifactWrapper">
      <div class="sketchfab-embed-wrapper">
      <p class="artifactTitle">
          <a href=${parameters.href_src} target="_blank">${parameters.iframe_title}</a> </p>
        <iframe title=${parameters.iframe_title} frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src=${parameters.iframe_src}></iframe>
         </div> 
         
      <style>
      .artifactWrapper{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-self: center;
        margin: 20px;
        border-radius: 8px;
        padding: 2%;
      }
      
      iframe{
        border-radius: 4px;
        width: 80%;
        margin: auto;
        margin-bottom: 15px;
        margin-top: 20px;
        box-shadow:
          0px 3px 5px -1px rgba(0, 0, 0, 0.2),
          0px 6px 10px 0px rgba(0, 0, 0, 0.70),
          0px 1px 18px 0px rgba(0,0,0,.12);
          transition: box-shadow .5s;
      }
      
      iframe:hover{
        box-shadow:
          0px 3px 5px -1px rgba(0, 0, 0, 0.9),
          0px 6px 10px 0px rgba(0, 0, 0, 0.9),
          0px 1px 18px 0px rgba(0,0,0,.9);
      }
      
      .artifactTitle{
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
        font-family: quicksand, sans-serif;
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
      </style>
        `;
  }
}

customElements.define("artifact-3d", Artifact3D);
