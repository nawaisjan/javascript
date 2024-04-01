// //singlton

const tinderUser = new Object();

tinderUser.id = "123";
tinderUser.name = "khan";

console.log(tinderUser);

/** --Object with in objects */

const regularUser = {
  email: "some@gmai.com",
  fullName: {
    userFullName: {
      firstName: "khan",
      secondNme: "jan",
    },
  },
  age: 12,
};

console.log(regularUser.fullName);

/** Object comnbie */

const obj1 = {
  1: "a",
  2: "3",
};
const obj2 = {
  3: "c",
  4: "d",
};
const obj3 = Object.assign({}, obj1, obj2);
console.log(obj3);

const obj4 = { ...obj1, ...obj2 };
console.log(obj3);

/** */

const users = [
  {
    id: 1,
    email: "abc@gmail",
  },
];

// user[1].email;

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("name"));
/**---------------------------------- */

/** ---------------Destruturing ----------- */

const course = {
  courseName: "javascript",
  price: "999",
  author: "chai or code",
};

const { author: instructor } = course;

console.log(instructor);

{
}

/** */
