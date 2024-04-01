// Singleto

const obj = new Object.create();
// Object Literals

const mySym = Symbol("key1");

const JsUser = {
  [mySym]: "mykey1",
  name: "khan",
  "full Name": "jan",
  age: 22,
  location: "karachi",
  email: "abc@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "saturday"],
};

console.log(JsUser["full Name"]);
console.log(JsUser[mySym]);
JsUser.email = "jannnnn@gamail.com";
//Object.freeze(JsUser);
JsUser.email = "jan@gamail.com";

console.log(JsUser);

JsUser.gereting = function () {
  console.log("helloe");
};
console.log(JsUser.gereting());

JsUser.geretingTwo = function () {
  console.log(`my name is ${this.name}`);
};
console.log(JsUser.geretingTwo());
