function Book(id, type, name, price) {
    this.id = id;
    this.type = type;
    this.name = name;
    this.price = price;
  }

Book.prototype.getImageUrl = function () {
    return `https://picsum.photos/240/224?random=${this.id}`;
};

class BookComponent extends HTMLElement {
    constructor() {
      super();

      // 加入物件屬性
      this._book = null;
      this._template = null;

      const shadowRoot = this.attachShadow({ mode: "open" });
    }

    get book() {
      return this._book;
    }

    set book(value) {
      this._book = value;
      this.render();
    }

    set template(value) {
        this._template = value;
        this.shadowRoot.appendChild(this._template.content.cloneNode(true));

        let link = document.createElement("link");
        link.setAttribute("href", "/src/output.css");
        link.setAttribute("rel", "stylesheet");
        this.shadowRoot.appendChild(link);
    }

    render() {
      const img = this.shadowRoot.querySelector("img");
      const bookName = this.shadowRoot.querySelector("#bookName");
      const price = this.shadowRoot.querySelector("#price");
      if (this._book) {
        img.src = this.book.getImageUrl();
        bookName.textContent = this.book.name;
        price.textContent = this.book.price;
      }
    }
  }

  customElements.define("book-component", BookComponent);