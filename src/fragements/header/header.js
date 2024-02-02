document.addEventListener("DOMContentLoaded", function () {
  fetch("/src/fragements/header/header.html")
    .then((response) => {
      return response.text();
    })
    .then((html) => {
      // 將內容插入到文檔中
      document.body.insertAdjacentHTML("beforeend", html);
      let template = document.getElementById("my-header");
      // 確保找到相應的 template 元素
      if(template) {
        customElements.define(
          "my-header",
          class extends HTMLElement {
            constructor() {
              super();
              let templateContent = template.content;
              const shadowRoot = this.attachShadow({ mode: "open" });
              shadowRoot.appendChild(templateContent.cloneNode(true));

              // 整合 Tailwind CSS 到主文檔： <link href="./output.css" rel="stylesheet" />
              let link = document.createElement('link');
              link.setAttribute('href','/src/output.css');
              link.setAttribute('rel','stylesheet');
              shadowRoot.appendChild(link);
            }
          },
        );
      } else {
        console.error("Template with id 'my-header' not found.");
      }
    });
});
