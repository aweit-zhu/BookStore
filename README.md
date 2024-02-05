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

### 如何讓 session storage 存物件

在 JavaScript 中，你可以使用 JSON.stringify 将对象转换为 JSON 字符串，然后将其存储在 Session Storage 中。当你需要检索时，可以使用 JSON.parse 将存储的 JSON 字符串转换回对象。


### 如何利用 live server 開啟 debugger 模式

```
.vscode/launch.json
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "chrome",
            "request": "launch",
            "name": "Launch Chrome against localhost",
            "url": "http://127.0.0.1:5500/src/login.html",
            "webRoot": "${workspaceFolder}"
        }
    ]
}
```

### 如果你想在浏览器的 F12 控制台中访问模块中的变量，可以使用 globalThis 对象。在模块中定义的变量默认情况下是模块私有的，但你可以将其附加到 globalThis 上，以便在控制台中访问

```
globalThis.getSessionUser = getSessionUser;
```

### 重新設定 prototype

```
  // 重新設定 Prototype
  [...sessionBooks].map(book=> {
      Object.setPrototypeOf(book, Book.prototype);
  });
```

### 沒辦法用 TypeScript？別擔心，你還可以寫 JSDoc(全名是「JavaScript Documentation」) 標注類型 <https://israynotarray.com/javascript/20230513/284079926/>