import { books,Book } from '/src/js/data.js';

export function addToCart(bookId) {
    
    let /** @type { Book } */ book = [...books].filter(b => b.id == bookId)[0];
    if(book.stockQty <=0) {
        alert(`${book.name} 已經無庫存`);
        return;
    }
    alert(`已加入購物車${bookId}`);
    cartItems.push(bookId);
    window.sessionStorage.setItem('cartItems',cartItems.join(','));
    window.location.reload();
}

let cartItems = window.sessionStorage.getItem('cartItems') ==null? "":window.sessionStorage.getItem('cartItems');
cartItems = cartItems == '' ? []: cartItems.split(',');

[...cartItems].map(
  bookId => {
    let book = books.filter(b => b.id == bookId)[0];
    book.stockQty = book.stockQty - 1;
  }
);

export { cartItems };