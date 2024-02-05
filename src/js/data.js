export function BookType(typeId,typeName) {
  this.typeId = typeId;
  this.typeName = typeName;
}

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

/**
 * 
 * @param {*} orderId     訂單編號
 * @param {*} orderTime   下單時間
 * @param {*} totalPrice  總金額
 * @param {*} totalQty    總數量
 * @param {*} status      訂單狀態
 */
export function Order(userId,orderId,orderTime,totalPrice,totalQty,status) {
  this.userId = userId;
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

export function Status(id,name) {
  this.id = id;
  this.name = name;
}



/**
 * 
 * @param {*} roleId 
 * @param {*} roleName 
 */
export function Role(roleId,roleName){
  this.roleId = roleId;
  this.roleName = roleName;
}

/**
 * 
 * @param {*} id 
 * @param {*} username 
 * @param {*} password 
 * @param {*} email 
 * @param {*} role 
 */
export function User(id,username,password,email, role) {
  this.id = id;
  this.username = username;
  this.password = password;
  this.email = email;
  this.role = role;
}

export const OrderStatus = {
  'WAITING': new Status(1, '待出貨'),
  'ONGOING': new Status(2, '已出貨'),
  'ARRIVED': new Status(3, '已到門市'),
}

export const Roles = {
  "ADMIN": new Role(1,"ADMIN"),
  "USER": new Role(2,"USER")
}

//=================================================================================//

export const users = [
  new User(1,'admin','admin','admin@example.com',Roles.ADMIN),
  new User(2,'user','user','user@example.com',Roles.USER),
];

export const BookTypes = {
  'IT': new BookType(1,'IT'),
  'Lang': new BookType(2,'Lang'),
}

export const books = [
  new Book(1, BookTypes.IT, "Java", 400, 20),
  new Book(2, BookTypes.IT, "Javascript", 400, 10),
  new Book(3, BookTypes.IT, "Spring", 700, 25),
  new Book(4, BookTypes.IT, "Python", 350, 2),
  new Book(5, BookTypes.IT, "SQL", 400, 3),
  new Book(6, BookTypes.Lang, "華語文", 600, 20),
  new Book(7, BookTypes.Lang, "英語", 800, 6),
  new Book(8, BookTypes.Lang, "法語", 800, 4),
  new Book(9, BookTypes.Lang, "多益檢定", 1700, 20),
  new Book(10, BookTypes.Lang, "全民英檢", 1500, 50),
];

export const orders = [
  new Order(1,'20231024012313','2023/10/24 23:48:52',750,2,OrderStatus.ONGOING),
  new Order(1,'20231024012314','2023/10/25 11:05:10',4000,2,OrderStatus.ARRIVED),
  new Order(2,'20231024012312','2024/12/15 20:00:05',800,1,OrderStatus.WAITING),
];

export const orderItems = [
  new OrderItem('20231024012313',1,400,1,400,OrderStatus.ONGOING),
  new OrderItem('20231024012313',4,350,1,350,OrderStatus.ONGOING),
  new OrderItem('20231024012312',7,800,1,800,OrderStatus.WAITING),
  new OrderItem('20231024012314',9,1700,1,1700,OrderStatus.ARRIVED),
  new OrderItem('20231024012314',10,1500,1,1500,OrderStatus.ARRIVED),
  new OrderItem('20231024012314',7,800,1,800,OrderStatus.ARRIVED)
];