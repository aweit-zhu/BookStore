import { books,Book,BookType,BookTypes } from '/src/js/data.js';

export function findAllBookTypes() {

    let bookTypes = JSON.parse(window.sessionStorage.getItem('bookTypes'));

    if(bookTypes ==null) {
        window.sessionStorage.setItem('bookTypes', JSON.stringify(Object.values(BookTypes)));
        bookTypes = JSON.parse(window.sessionStorage.getItem('bookTypes'));
    } 

    // 轉型成Booktype
    bookTypes = bookTypes.map(bookType => new BookType(bookType.typeId, bookType.typeName));

    return bookTypes;
}

export function findAllBooks() {
    return getBooks();
}

export function findBookById(bookId) {

    const findBook = [...findAllBooks()].filter(book => book.id == bookId);

    return findBook.length == 0 ? null: findBook[0];
}

export function minusBookSotckByBookId(bookId, qty) {
   let books = findAllBooks();
   let message = '';
   [...books].filter(book => book.id == bookId).forEach(book=> {
        if(book.stockQty - qty < 0) {
            message = `${book.name} 已經無庫存`;
        } else {
            book.stockQty = book.stockQty - qty;
        }
   });

   if(message == '')saveBooks(books);
   return message;
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
        sessionBooks = JSON.parse(window.sessionStorage.getItem('books'));
    } 

    [...sessionBooks].map(book=> {
        Object.setPrototypeOf(book, Book.prototype);
    });

    return sessionBooks;
}
