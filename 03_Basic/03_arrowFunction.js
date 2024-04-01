const user = {
  username: "jan",
  price: 99,
  welcome: function () {
    console.log(`${this.username} welcome to website`);
    console.log(this);
  },
};

// user.welcome();
// user.username = "same";
// user.welcome();

// console.log(this);

/**    */

// function chai() {
//   let username = "jan";
//   console.log(this.username); // will not print bcz this only work in object
// }

const chai = () => {
  let username = "jan";
  console.log(this.username);
};

// chai();

/**----Basic Return */

const addTwo = (num1, num2) => {
  return num1 + num2;
};

/**-------Implicit Return */

const addThree = (value1, value2, value3) => value1 + value2 + value3;
console.log(addThree(3, 4, 6));

const returnObject = () => ({ usernmae: "khan" });

console.log(returnObject());

const myArry = [2, 3, 4, 5, 6, 6];

/** -----/----------- */
