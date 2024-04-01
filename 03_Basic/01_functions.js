function sayMyName() {
  console.log("h");
  console.log("h");
  console.log("h");
  console.log("h");
}

// sayMyName();

function addTwoNumber(num1, num2) {
  //console.log(num1 + num2);
  return num1 + num2;
}

const result = addTwoNumber(3, 5);
// console.log(result);

/**-------------*/

function loginUserMessage(username = "sam") {
  if (username === undefined) {
    console.log("please enter  a user name");
    return;
  }
  return `${username} just LoggedIn`;
}

console.log(loginUserMessage());

/** ----- */

function calculateCartPrice(...num1) {
  return num1;
}

console.log(calculateCartPrice(3, 5, 6, 7, 8, 8, 9, 9));

const user = {
  username: "jna",
  price: 199,
};

function handleObject(anyobject) {
  console.log(
    `userdname is ${anyobject.username} and price is  ${anyobject.price}`
  );
}

handleObject(user);
handleObject({ username: "smae", price: "34" });

const arr1 = [3, 4, 6, 7];

function returnSecondValue(getArr) {
  return getArr[0];
}

console.log(returnSecondValue(arr1));

//
