// let myName = "hitesh             ";

// console.log(myName.treuLength);

let myHeros = ["thor", "spiderman"];
let heroPower = {
  thor: "hammer",
  spiderman: "slling",
  getSpiderPowe: function () {
    console.log(`spidy power is ${this.spiderman}`);
  },
};

const Teacher = {
  name: "teachername",
  email: "email",
};

const TeacherAssitance = {
  name: "name",
};

Object.setPrototypeOf(TeacherAssitance, Teacher);

let anotherUsername = "chaiAurCode";

String.prototype.trueLength = function () {
  console.log(`${this}`);
};
