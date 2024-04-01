// /**---For Loop-------- */

// const array = [1, 23, 4, , 5, 5];
// for (let i = 0; i < array.length; i++) {
//   const element = array[i];
//   console.log(element);
// }

// for (let i = 0; i < 10; i++) {
//   console.log(`"outer loop ${i}`);
//   for (let j = 0; j < 10; j++) {
//     //console.log(`Inner loop value ${j}`);
//     console.log(i + "*" + j + "=" + i * j);
//   }
// }

// let myArray = [1, 3, 5, 6];

// for (let index = 0; index < myArray.length; index++) {
//   const element = myArray[index];
//   console.log("element", element);
// }

// break and continue

for (let index = 1; index <= 20; index++) {
  if (index == 5) {
    console.log("detected 5");
    continue;
  }
  console.log(`value of i is ${index} `);
}
