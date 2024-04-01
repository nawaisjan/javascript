const userEmail = [];

if (userEmail) {
  console.log("got emai;");
} else {
  console.log("not");
}

// ------------falsy values-----
// false ,0, -0, BigInt 0n, "" , undefined, NAN

/**---------------truthy value -------- */
// "0" , "false" , " " , [] , {}  function(){}

if (userEmail.length === 0) {
  console.log("Arry is empty");
}

// checkking object

const obj = {};

if (Object.keys(obj).length === 0) {
  console.log("object is empty");
}

/** Nullish coalescing operato (??): null undefined */

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;

// val1 = undefined ?? 15;

console.log(val1);

/** ternonary operator */

//condition ? ture : false;

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");
