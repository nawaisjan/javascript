const array1 = [1, 2, 4];

const initailValue = 0;

const sumWithInnitial = array1.reduce((acc, currentValue) => {
  console.log(`acc: ${acc} and current ${currentValue}`);
  return acc + currentValue;
}, 0);

console.log(sumWithInnitial);

const shoppingCart = [
  {
    itemName: "py ",
    price: "100",
  },
  {
    itemName: "js ",
    price: "200",
  },
  {
    itemName: "c++",
    price: "300",
  },
];

const shopingcarTotal = shoppingCart.reduce((acc, item) => {
  console.log(`acc; ${acc}  item : ${item.price}`);
  return acc + Number(item.price);
}, 0);
console.log(shopingcarTotal);
