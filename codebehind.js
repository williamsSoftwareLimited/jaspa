class Codebehind extends HTMLElement {
  constructor(){
      super();
  }
  connectedCallback() {
    // Create a shadow root
    //const shadow = this.attachShadow({ mode: "open" });
    const style = document.createElement("style");

      //shadow.appendChild(style);
  }
}
customElements.define("code-behind", Codebehind);