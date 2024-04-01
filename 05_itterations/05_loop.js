/** foreach loo */

const arr = [1, 3, 3, 4, , 4, 4, , 4, 4];

// arr.forEach((element) => {
//   console.log(element);
// });

// const arr2 = [3, 43, 43, 43, 4, 34, 34, 3];

// arr2.forEach((element) => {
//   console.log(element);
// });

function printMe(item) {
  console.log(item);
}

arr.forEach(printMe);

const mycoding = [
  {
    languagename: "java",
    lanFile: "js",
  },
  {
    languagename: "pyhton",
    lanFile: "py",
  },
];

mycoding.forEach((item) => {
  console.log(item.languagename);
});
