class CoffeeShop {
  constructor(props) {
    this.name = props.name;
    this.menu = props.menu;
    this.orders = [];
    this.ordersInfo = [];
  }
  addOrder(itemName) {
    for (let item of this.menu) {
      if (item.name === itemName) {
        this.orders.push(itemName);
        this.ordersInfo.push(item);
        return "Your order is added";
      }
    }
    return "This item is currently unavailable!";
  }

  fulfillOrder(itemName) {
    if (this.orders.length === 0) {
      return "All orders have been fulfilled!";
    }
    let itemIndex = this.orders.indexOf(itemName);
    if (itemIndex > -1) {
      this.orders.splice(itemIndex, 1);
      return `The ${itemName} is ready!`;
    } else {
      return `The ${itemName} is served!`;
    }
  }

  listOrders() {
    return this.orders;
  }

  dueAmount() {
    let prices = this.ordersInfo.map((item) => (item = item.price));
    console.log(prices);
    return prices.reduce((item, accum) => {
      return accum + item;
    }, 0);
  }

  cheapestItem() {
    let cheapestItemPrice = +Infinity;
    let cheapestItemName;
    for (let item of this.menu) {
      if (item.price < cheapestItemPrice) {
        cheapestItemPrice = item.price;
        cheapestItemName = item.name;
      }
    }
    return cheapestItemName;
  }

  drinksOnly() {
    return this.menu.filter((item) => {
      return item.type === "drink";
    });
  }
  foodOnly() {
    return this.menu.filter((item) => {
      return item.type === "food";
    });
  }
}

let myCafeMenu = [
  {
    name: "Fries",
    type: "food",
    price: 920,
  },
  {
    name: "Coffee",
    type: "drink",
    price: 800,
  },
  {
    name: "Burger",
    type: "food",
    price: 1200,
  },
  {
    name: "Orange juice",
    type: "drink",
    price: 750,
  },
];
let myCafe = new CoffeeShop({ name: "Cafe", menu: myCafeMenu });
