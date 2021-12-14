/* Работа с коллекцией (массивом обьекта) товаров в корзине: 
- getItems() 
- add(product)
- remove(productName)
- clear()
- countTotalPrice()
- increaseQuantity(productName)
- decreaseQuantity(productName) 

{ name: 'apple', price: 50 }
{ name: 'grape', price: 70 }
{ name: 'lemon', price: 60 }
{ name: 'mango', price: 110 } */

const cart = {
    items: [],
    getItems() {},
    add(product) {
        product.quantity += 1;
    },
    clear() {},
    countTotalPrice() { },
    increaseQuantity(productName) { },
    decreaseQuantity(productName) { },
};

// console.table(cart.getItems());

cart.add({ name: 'apple', price: 50 });
cart.add({ name: 'grape', price: 70 });
cart.add({ name: 'lemon', price: 60 });
cart.add({ name: 'mango', price: 110 });

// console.table(cart.getItems());

cart.remove('apple');
// console.table(cart.getItems());

// cart.clear();
// console.table(cart.getItems());

// cart.increaseQuantity('apple');
// console.table(cart.getItems());

// cart.decreaseQuantity('lemon');
// cart.decreaseQuantity('lemon');
// console.table(cart.getItems());

// console.log('Total: ', cart.countTotalPrice());

