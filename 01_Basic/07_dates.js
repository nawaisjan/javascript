console.log(Date());

const myDate = new Date();

console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(myDate.toDateString());

//const myCreatedDate = new Date(2024, 2, 30);
const myCreatedDate = new Date("01, 14, 2024");

console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();

console.log(myTimeStamp);
console.log(myTimeStamp);

console.log("floor", Math.floor(Date.now() / 1000));

let newDate = new Date();
console.log(newDate.getMonth());
console.log(newDate.getDay());

newDate.toLocaleString("default", {
  weekday: "long",
});
