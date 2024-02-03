import { books,cartItems } from '/src/js/data.js';

export function addToCart(bookId) {
    alert(`已加入購物車${bookId}`);
    cartItems.push(bookId);
    window.sessionStorage.setItem('cartItems',cartItems.join(','));
    //window.location.reload();
    console.log(books);
}

