let index = 0;
while (index <= 10) {
  console.log(`value of index is ${index}`);

  index = index + 2;
}

let myArray = [3, , 53, 3, 23, , 23, 32];

let arr = 0;
while (arr < myArray.length) {
  console.log(`value is ${myArray[arr]}`);
  arr++;
}

/** DO WHILE */
let score = 1;

do {
  console.log(`score is ${score}`);
  score++;
} while (score <= 10);
