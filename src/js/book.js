import { books,Book,BookType,BookTypes } from './data.js';

/**
 * 
 * @returns {Array<BookType>}
 */
export function findAllBookTypes() {

    let bookTypes = JSON.parse(window.sessionStorage.getItem('bookTypes'));

    if(bookTypes ==null) {
        // @ts-ignore
        window.sessionStorage.setItem('bookTypes', JSON.stringify(Object.values(BookTypes)));
        bookTypes = JSON.parse(window.sessionStorage.getItem('bookTypes'));
    } 

    // 轉型成Booktype
    bookTypes = bookTypes.map(bookType => new BookType(bookType.typeId, bookType.typeName));

    return bookTypes;
}

/**
 * 
 * @returns {Array<Book>}
 */
export function findAllBooks() {
    return getBooks();
}

/**
 * 
 * @param {number} bookId 
 * @returns  {Book}
 */
export function findBookById(bookId) {

    const findBook = [...findAllBooks()].filter(book => book.id == bookId);

    return findBook.length == 0 ? null: findBook[0];
}

/**
 * 
 * @param {number} bookId 
 * @param {number} qty 
 * @returns {string}
 */
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

// @ts-ignore
export function saveBook(book) {

    getBooks();
}

function saveBooks(books) {
    window.sessionStorage.setItem('books', JSON.stringify([...books]));
}

/**
 * 
 * @returns {Array<Book>}
 */
function getBooks() {

    let sessionBooks = JSON.parse(window.sessionStorage.getItem('books'));

    if(sessionBooks ==null) {
        saveBooks(books);
        sessionBooks = JSON.parse(window.sessionStorage.getItem('books'));
    } 

    [...sessionBooks].map(book=> {
        // @ts-ignore
        Object.setPrototypeOf(book, Book.prototype);
    });

    return sessionBooks;
}
