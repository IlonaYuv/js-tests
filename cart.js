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
    getItems() {
        return this.items;
    },
    add(product) {
        for (const item of this.items) {
            console.log(item);
         
            if (item.name === product.name) {
                item.quantity += 1;
                return;
            }
        }

        const newProduct = {
            ...product,
            quantity: 1,
        };

        this.items.push(newProduct);
        // product.quantity += 1;
    },
    remove(productName) {
        const { items } = this;

        for (let i = 0; i < items.length; i += 1) {
            const { name } = items[i];

             if (productName === name) {
                console.log('нашли такой продукт', productName);
                console.log('index: ', i);
                 
                items.splice(i, 1);
            }
        }
    },
    clear() {
        this.items = [];
    },
    countTotalPrice() {
        const { items } = this;
        let total = 0;

        for (const { price, quantity } of items) {
            total += price * quantity;
        }

        return total;
    },
    increaseQuantity(productName) { },
    decreaseQuantity(productName) { },
};

console.log(cart.getItems());

cart.add({ name: 'apple', price: 50 });
cart.add({ name: 'grape', price: 70 });
cart.add({ name: 'lemon', price: 60 });
cart.add({ name: 'mango', price: 110 });
cart.add({ name: 'mango', price: 110 });

console.table(cart.getItems());

console.log('Total: ', cart.countTotalPrice());

cart.remove('apple');
console.table(cart.getItems());

cart.clear();
console.log(cart.getItems());

console.log('Total: ', cart.countTotalPrice());

// cart.increaseQuantity('apple');
// console.table(cart.getItems());

// cart.decreaseQuantity('lemon');
// cart.decreaseQuantity('lemon');
// console.table(cart.getItems());



