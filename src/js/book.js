import { books,Book } from '/src/js/data.js';

export function findAllBooks() {

    let sessionBooks = JSON.parse(window.sessionStorage.getItem('books'));

    if(sessionBooks == null) {
        window.sessionStorage.setItem('books', JSON.stringify([...books]));
        sessionBooks = JSON.parse(window.sessionStorage.getItem('books'));
    }

    // 重新設定 Prototype
    [...sessionBooks].map(book=> {
        Object.setPrototypeOf(book, Book.prototype);
    });

    return sessionBooks;
}

export function findBookById(bookId) {

    const findBook = [...findAllBooks()].filter(book => book.id == bookId);

    return findBook.length == 0 ? null: findBook[0];
}

export function saveBook(book) {

}

