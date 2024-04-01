// // if statment

// const isUserLoggedIn = true;

// const temp = 41;

// if (temp < 50) {
//   console.log("les");
// }

// if (isUserLoggedIn) {
// }

// // < , > <= .>= == != ===

// if (2 === "2") {
//   console.log("yes");
// }

// const score = 200;
// var power = "notfly";
// console.log(power);

// if (score > 100) {
//   var power = "fly";
//   console.log("user power", power);
// }

// console.log(power);

// const balance = 1000;
// if (balance > 500) console.log("test");

// /** Nesting  */

// if (balance < 500) {
//   console.log("lesss than");
// } else if (balance < 750) {
//   console.log("less than 750");
// } else {
// }

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;

if (userLoggedIn && debitCard) {
  console.log("Allow to buy");
}

if (loggedInFromGoogle || userLoggedIn) {
  console.log("access");
}
