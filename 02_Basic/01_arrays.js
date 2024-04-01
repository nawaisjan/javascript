/** Array */

const { type } = require("os");

const myArr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
const myHeros = ["jan", "khan"];

const myArr2 = new Array(1, 2, 4, 5, 6);

//console.log(myArr[5]);

//Array Methods

// myArr.push(6);
// myArr.push(7);
// myArr.pop();

// myArr.unshift(9);
// myArr.shift();

// console.log(myArr.indexOf(1));

// console.log(myArr);

// const newArr = myArr.join();
// console.log(newArr);
// console.log(typeof newArr);

// slic , splice

console.log("ORIGNANL", myArr);

const myN1 = myArr.slice(1, 3);
console.log("B", myArr);
console.log("SLICE", myN1);

const myN2 = myArr.splice(1, 3);
console.log("C", myArr);
console.log("SPLICE", myN2);

/** -----  */

const marvel_heros = ["iron", "khan", "lion"];
const dc_heros = ["sperman", "flash", "jan"];

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);

const allheros = marvel_heros.concat(dc_heros);
console.log(allheros);

const all_new_heros = [...marvel_heros, ...dc_heros];
console.log(all_new_heros);

const anothe_array = [1, 2, 3, 4, [5, 6, 7], [6, 7, [10, 11]]];
const real_another_array = anothe_array.flat(Infinity);
console.log(real_another_array);

console.log(Array.isArray("THHSHSH"));
console.log(Array.from("htahahah"));
let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));

//------
