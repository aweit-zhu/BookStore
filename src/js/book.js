import { books } from '/src/js/data.js';

export function findBookById(bookId) {

    const findBook = [...books].filter(book=> book.id == bookId);

    return findBook.length == 0 ? null: findBook[0];
}