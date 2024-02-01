document.addEventListener("DOMContentLoaded", function() {

    fetch('/src/fragements/sample.html')
    .then(response => {
        return response.text();
    }).then(html => {
        
        document.body.insertAdjacentHTML('beforeend', html);

        customElements.define(
            "my-paragraph",
            class extends HTMLElement {
              constructor() {
                super();
                let template = document.getElementById("my-paragraph");
                
                // 確保找到相應的 template 元素
                if (template) {
                  let templateContent = template.content;
                  const shadowRoot = this.attachShadow({ mode: "open" });
                  shadowRoot.appendChild(templateContent.cloneNode(true));
                } else {
                  console.error("Template with id 'my-paragraph' not found.");
                }
              }
            }
          );
    });
  });