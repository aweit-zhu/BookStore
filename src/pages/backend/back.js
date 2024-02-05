import { findAllBooks, findAllBookTypes } from "../../js/book.js";

console.info(findAllBooks());
console.info(findAllBookTypes());

let books = findAllBooks();

[...books].map(book=> {
    $('tbody').append(
        `
           <tr>
            <td>${book.id}</td>
            <td>${book.type.typeName}</td>
            <td>${book.name}</td>
            <td>${book.price}</td>
            <td>${book.stockQty}</td>
            <td class="flex text-nowrap">
                <button class="btn-success mx-1" data-book-id="${book.id}">更新</button>
                <button class="btn-danger mx-1" data-book-id="${book.id}">刪除</button>
            </td>
           </tr>
        `
    );
});