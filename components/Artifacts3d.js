import styles from "./css_components/Artifacts3d.css" assert { type: "css" };

class Artifact3D extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.adoptedStyleSheets.push(styles);
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
        `;
  }
}

customElements.define("artifact-3d", Artifact3D);
