// 2) Stwórz strukturę danych związaną ze sklepem

// Obiekt charakteryzujący koszyk:
// Ma mieć: listę wybranych przedmiotów, rabat % na koszyk, kod rabatowy
// Ma umożliwiać: dodawanie/usuwanie przedmiotów do/z koszyka, podliczać cene,
// podliczać ilośc, brać pod uwagę rabat oraz kod rabatowy jeśli istnieje (ma istnieć)

// Obiekt charakteryzujący przedmiot:
// Ma miec: Nazwę, Kategorię, Cenę, Rabat % na przedmiot, id
// Ma umożliwiać: Tworzenie obiektu, wyświetlac o nim informacji (w odpowiedniej
// formie),modyfikować cenę przedmiotu, określać jego rabat %

let uuid = require("uuid/v4");

discountCodes = [
  { name: "discount-5", discount: 5, id: "0qvu9" },
  { name: "discount-10", discount: 10, id: "4lsj8" },
  { name: "discount-15", discount: 15, id: "jh21m" }
];

class Item {
  constructor(name, category, price, discount) {
    this.id = uuid().slice(0, 3);
    this.name = name;
    this.category = category;
    this.price = price;
    this.discount = discount + "%";
    this.afterDiscount = this.countAfterDiscount();
  }
  updateItem(key, value) {
    if (Object.keys(this).includes(key) && key !== "id") this[key] = value;
    this.afterDiscount = this.countAfterDiscount();
  }
  readItem() {
    console.log(this);
  }
  countAfterDiscount() {
    let discount = parseFloat(this.discount);
    if (discount > 0 && discount <= 100)
      return parseFloat(((this.price * (100 - discount)) / 100).toFixed(2));
    else return this.price;
  }
}

class Cart {
  constructor() {
    this.itemList = [];
    this.id = uuid().slice(0, 3);
    this.totalPrice = 0;
    this.totalDiscount = 0;
    this.totalQuantity = 0;
    this.discountCodes = [];
  }
  countItemTotalPrice(item) {
    return parseFloat((item.afterDiscount * item.quantity).toFixed(2));
  }
  countTotalPrice() {
    let discount = this.discountCodes.discount
      ? (100 - this.discountCodes.discount) / 100
      : 1;
    let total = 0;
    for (let i in this.itemList) total += this.itemList[i].totalPrice;
    return parseFloat((total * discount).toFixed(2));
  }
  countTotalDiscount() {
    let afterDiscount = this.totalPrice;
    let beforeDiscount = 0;
    for (let i in this.itemList)
      beforeDiscount += this.itemList[i].price * this.itemList[i].quantity;
    return (100 - (afterDiscount * 100) / beforeDiscount).toFixed(2) + "%";
  }
  countTotalQuantity() {
    let total = 0;
    for (let i in this.itemList) total += this.itemList[i].quantity;
    return parseFloat(total.toFixed(2));
  }
  addToCart(item, quantity) {
    let index = this.itemList.indexOf(item);
    if (index !== -1) {
      this.itemList[index].quantity += quantity;
      this.itemList[index].totalPrice = this.countItemTotalPrice(item);
    } else {
      item.quantity = quantity;
      item.totalPrice = this.countItemTotalPrice(item);
      this.itemList.push(item);
    }
    this.update();
  }
  deleteFromCart(item, quantity) {
    let index = this.itemList.indexOf(item);
    if (index !== -1) {
      if (quantity === this.itemList[index].quantity) {
        this.itemList.splice(index, 1);
      } else {
        this.itemList[index].quantity -= quantity;
      }
    }
    item.totalPrice = this.countItemTotalPrice(item);
    this.update();
  }
  // Assumption - You can add only one discount code for one cart
  addDiscountCode(id) {
    for (let i in discountCodes) {
      if (discountCodes[i].id === id) this.discountCodes = discountCodes[i];
    }
    this.update();
  }
  read() {
    console.log(this);
  }
  update() {
    this.totalPrice = this.countTotalPrice();
    this.totalDiscount = this.countTotalDiscount();
    this.totalQuantity = this.countTotalQuantity();
  }
}

// ITEM - TESTS
tomato = new Item("tomato", "vegetables", 5.5, 5);
apple = new Item("apple", "fruits", 2.13, 0);
juice = new Item("juice", "dirinks", 10, 10);
lemon = new Item("lemon", "fruit", 1.23, 0);
tomato.updateItem("price", 7.11);
apple.updateItem("discount", "2%");
// tomato.readItem();
// apple.readItem();

// CART - TESTS
cart1 = new Cart();
cart1.addToCart(apple, 3);
cart1.itemList[0].id = "111";
cart1.addToCart(tomato, 2);
cart1.itemList[1].id = "222";
cart1.addToCart(juice, 5);
cart1.itemList[2].id = "333";
cart1.addToCart(lemon, 2);
cart1.addDiscountCode("4lsj8");
cart1.deleteFromCart(tomato, 1);
cart1.addToCart(lemon, 1);
cart1.addToCart(lemon, 2);

cart1.read();
