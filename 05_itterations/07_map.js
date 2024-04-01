const myNum = [1, 2, 4, 5, 5, 6, 6, 6];

//const newNum = myNum.map((num) => num + 10);
// console.log(newNum);

/** Chaining */

const newNums = myNum
  .map((num) => num * 10)
  .map((num) => num + 10)
  .filter((num) => num >= 40);
console.log(newNums);
