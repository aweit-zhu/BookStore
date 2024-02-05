import { books,Book } from '/src/js/data.js';

export function findAllBooks() {
    return getBooks();
}

export function findBookById(bookId) {

    const findBook = [...findAllBooks()].filter(book => book.id == bookId);

    return findBook.length == 0 ? null: findBook[0];
}

export function minusBookSotckByBookId(bookId, qty) {
   let books = findAllBooks();
   [...books].filter(book => book.id == bookId).forEach(book=> {
        book.stockQty = book.stockQty - 1;
   });
   saveBooks(books);
}

export function saveBook(book) {

    getBooks();
}

function saveBooks(books) {
    window.sessionStorage.setItem('books', JSON.stringify([...books]));
}

function getBooks() {

    let sessionBooks = JSON.parse(window.sessionStorage.getItem('books'));

    if(sessionBooks ==null) {
        saveBooks(books);
    } 

    [...sessionBooks].map(book=> {
        Object.setPrototypeOf(book, Book.prototype);
    });

    return sessionBooks;
}
