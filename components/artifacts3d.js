import { Artifact3D_css } from "../css/css_components.js";

class Artifact3D extends HTMLElement {
  constructor() {
    super();
  }

  static get styles() {
    return Artifact3D_css;
  }


  connectedCallback() {
    let parameters = { href_src: "", iframe_src: "", iframe_title:"" };

    parameters["href_src"] = this.href_src = this.getAttribute("href_src") ?? "";
    parameters["iframe_src"] = this.iframe_src = this.getAttribute("iframe_src") ?? "";
    parameters["iframe_title"] = this.iframe_title = this.getAttribute("iframe_title") ?? "";
    this.render(parameters);
  }

  render(parameters) {
    this.innerHTML = 
    ` 
    <div class="artifactWrapper">
      <div class="sketchfab-embed-wrapper">
      <p class="artifactTitle">
          <a href=${parameters.href_src} target="_blank">${parameters.iframe_title}</a> </p>
        <iframe title=${parameters.iframe_title} frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src=${parameters.iframe_src}></iframe>
         </div> 
         
      <style>
      ${Artifact3D.styles}
      </style>
        `;
  }
}

customElements.define("artifact-3d", Artifact3D);
