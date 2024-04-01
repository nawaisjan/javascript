/** Primitive*/
// 7 types : string , number , boolean , null , undefined,symbol,BigInt

//const { BigNumber } = require("alchemy-sdk");

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId);

console.log(id);
const BigNumber = 2344444444234423n;
console.log(BigNumber);

/**Reffrence type or non primitive */

//array ,Objects,functions

const heros = ["jan", "khan", "afsdaf"];

let myOhj = {
  name: "joinSignature",
  age: 22,
};

const myFunction = function () {
  console.log("hellow world");
};

myFunction();

console.log(typeof myFunction);

/** memories */
//Stack, Primitive types
// Heap  Non Primitive

let myYotubeName = "ali";
let anotherName = myYotubeName;

anotherName = "khan";
console.log(myYotubeName);
console.log(anotherName);

let user = {
  email: "user@gmail.com",
  upi: "upi@abl",
};

let userTwo = user;
userTwo.email = "jan@mgail.com";

console.log(user.email);
console.log(userTwo.email);
