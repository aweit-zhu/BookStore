# BookStore

### 如何寫 Web Component，以做到類似 Header 共用


header.html
```
<template id="my-header">
  <style>
    p {
      color: white;
      background-color: #666;
      padding: 5px;
    }
  </style>
  <p>My paragraph</p>
</template>
```

header.js
```
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
```

index.html
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>阿偉特書店</title>
    <link href="./output.css" rel="stylesheet" />
    <script src="./fragements/header/header.js" defer></script>
</head>
<body>
    <my-header></my-header>
</body>
</html>
```

### TailwindCSS v3.4.1 <https://tailwindcss.com/docs>

### Icon - heroicons v2.1.1 <https://heroicons.com/>

### Icon - Bootstrap <https://icons.getbootstrap.com/?q=logou>

### 圖片素材 - pxhere <https://pxhere.com/en/photos?q=book&search=>

### 假圖 - Lorem Picsum <https://picsum.photos/>

### JS 加型別

```
var /** @type {HTMLImageElement} */ img = document.querySelector("#img");
```