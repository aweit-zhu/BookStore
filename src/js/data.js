const books = [
  new Book(1, "IT", "Java", 400, 20),
  new Book(2, "IT", "Javascript", 400, 10),
  new Book(3, "IT", "Spring", 700, 25),
  new Book(4, "IT", "Python", 350, 2),
  new Book(5, "IT", "SQL", 400, 3),
  new Book(6, "Lang", "華語文", 600, 20),
  new Book(7, "Lang", "英語", 800, 6),
  new Book(8, "Lang", "法語", 800, 4),
  new Book(9, "Lang", "多益檢定", 1700, 20),
  new Book(10, "Lang", "全民英檢", 1500, 50),
];

let cartItems = window.sessionStorage.getItem('cartItems') ==null? "":window.sessionStorage.getItem('cartItems');
cartItems = cartItems == '' ? []: cartItems.split(',');

export { books,cartItems };
