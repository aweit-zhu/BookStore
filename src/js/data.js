export function Book(id, type, name, price, stockQty) {
  this.id = id;
  this.type = type;
  this.name = name;
  this.price = price;
  this.stockQty = stockQty;
}

Book.prototype.getImageUrl = function () {
  return `https://picsum.photos/240/224?random=${this.id}`;
};

export const books = [
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

/**
 * 
 * @param {*} orderId     訂單編號
 * @param {*} orderTime   下單時間
 * @param {*} totalPrice  總金額
 * @param {*} totalQty    總數量
 * @param {*} status      訂單狀態
 */
export function Order(orderId,orderTime,totalPrice,totalQty,status) {
  this.orderId = orderId;
  this.orderTime = orderTime;
  this.totalPrice = totalPrice;
  this.totalQty = totalQty;
  this.status = status;
}

/**
 * 
 * @param {*} orderId 訂單編號
 * @param {*} bookId  書本ID
 * @param {*} price   售價
 * @param {*} qty     購買數量
 * @param {*} total   金額
 * @param {*} status  狀態
 */
export function OrderItem(orderId,bookId,price,qty,total,status) {
  this.orderId = orderId;
  this.bookId = bookId;
  this.price = price;
  this.qty = qty;
  this.total = total;
  this.status = status;
}

export const orders = [
  new Order('20231024012313','2023/10/24 23:48:52',750.2,'已取貨'),
];

export const orderItems = [
  new OrderItem('20231024012313',1,400,1,400,'已取貨'),
  new OrderItem('20231024012313',4,350,1,350,'已取貨')
];