document.addEventListener("DOMContentLoaded", function () {
  fetch("/src/fragements/header/header.html")
    .then((response) => {
      return response.text();
    })
    .then((html) => {
      document.body.insertAdjacentHTML("beforeend", html);
      customElements.define(
        "my-header",
        class extends HTMLElement {
          constructor() {
            super();
            let template = document.getElementById("my-header");
            // 確保找到相應的 template 元素
            if (template) {
              let templateContent = template.content;
              const shadowRoot = this.attachShadow({ mode: "open" });
              shadowRoot.appendChild(templateContent.cloneNode(true));
            } else {
              console.error("Template with id 'my-header' not found.");
            }
          }
        },
      );
    });
});
