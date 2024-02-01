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

