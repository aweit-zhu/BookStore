import { findAllBooks,findBookById,minusBookSotckByBookId } from '/src/js/book.js';

export function addToCart(bookId) {
    let book = findBookById(bookId);
    if(book.stockQty <= 0) {
        alert(`${book.name} 已經無庫存`);
        return;
    }
    minusBookSotckByBookId(bookId,1);
    alert(`已加入購物車${bookId}`);
    let cartItems = findAllCartItems();
    cartItems.push(bookId);
    window.sessionStorage.setItem('cartItems',cartItems.join(','));
    window.location.reload();
}

export function findAllCartItems() {
  let cartItems = window.sessionStorage.getItem('cartItems') ==null? "":window.sessionStorage.getItem('cartItems');
  cartItems = cartItems == '' ? []: cartItems.split(',');
  return cartItems;
}