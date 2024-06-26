//const coding = [1, 2, 2, 2, 2, , 23];

// const value = coding.forEach((item) => {
//   console.log(item);
//   return item;
// });
// console.log(value);

const myNum = [1, 2, 3, 2, 3, 23, 23, 2, 32, 3];

// const newNum = num.filter((num) => num > 4);
// console.log(newNum);

const newNum = [];
myNum.forEach((num) => {
  if (num > 4) {
    newNum.push(num);
  }
});
console.log(newNum);

/**----------------- filer method */

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

const userBook = books.filter((bk) => bk.genre === "Fiction");

const user2Book = books.filter((bk) => {
  return bk.publish > 2000 && bk.genre === "Science";
});

console.log(userBook);
console.log(user2Book);
