class Product {
  constructor(name, type, price) {
    this.name = name;
    this.type = type;
    this.price = price;
  }
}

let product = new Product("dress", "clothing", 25000);
let product1 = new Product("boots", "shoes", 40000);
let product2 = new Product("Kindle", "eBook", 55000);
let product3 = new Product("headset", "device", 120000);
let replacementProduct = new Product("sneakers", "shoes", 35000);

class ShoppingCart {
  constructor() {
    this.productList = [];
  }

  addProduct(product) {
    this.productList.push(product);
  }
  removeProduct(product) {
    let index = this.productList.indexOf(product);
    this.productList.splice(index, 1);
  }
  getProductList() {
    return this.productList.map((item) => (item = item.name));
  }
  totalPrice() {
    let priceList = this.productList.map((item) => {
      return (item = item.price);
    });
    return priceList.reduce((item, accum) => {
      return accum + item;
    }, 0);
  }
  calcDiscount() {
    let productQuantity = {};
    for (let item of this.productList) {
      if (productQuantity[item.price] === undefined) {
        productQuantity[item.price] = 1;
      } else {
        productQuantity[item.price]++;
      }
    }
    for (let key in productQuantity) {
      if (productQuantity[key] > 3) {
        let mustBePaid = Math.trunc(productQuantity[key] / 3) * 3;
        productQuantity[key] = mustBePaid;
      }
    }
    // return productQuantity;
    let paidProductQuantity = Object.values(productQuantity).reduce(
      (item, accum) => {
        return accum + item;
      },
      0
    );
    // return paidProductQuantity;
    if (paidProductQuantity > 5) {
      let totalPrice = [];
      for (let key in productQuantity) {
        totalPrice.push(+key * productQuantity[key]);
      }
      let total = totalPrice.reduce((item, accum) => {
        return accum + item;
      }, 0);
      return (total -= (total / 100) * 10);
    } else {
      return "Sorry, you can't get discount";
    }
  }

  replace(productName, replacementProduct) {
    for (let item of this.productList) {
      if (item.name === productName) {
        let soldOutProductIndex = this.productList.indexOf(item);
        this.productList.splice(soldOutProductIndex, 1, replacementProduct);
      }
    }
    return `Sorry ${productName} is sold out, but you can buy ${replacementProduct.name}.`;
  }
}

// console.log(product);
let shoppingCart = new ShoppingCart();
