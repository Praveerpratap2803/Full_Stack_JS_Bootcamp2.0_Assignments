const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

shoppingCart.unshift("Meat")
console.log(shoppingCart);

shoppingCart.push("Sugar")
console.log(shoppingCart);

let index = shoppingCart.indexOf("Honey")
shoppingCart.splice(index,1)
console.log(shoppingCart);

shoppingCart.splice(3,1,"Green Tea")
console.log(shoppingCart);
