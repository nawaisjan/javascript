// const { resolve } = require("path");
// const { setTimeout } = require("timers/promises");

// const promisOne = new Promise(function (resolve, reject) {
//   //DO an asyn task
//   //DB CALLS CRYPTO

//   setTimeout(function () {
//     console.log("Async task is complete");
//     resolve();
//   }, 1000);
// });

// promisOne.then(() => {
//   console.log("promis consume");
// });

// new Promise(() => {
//   setTimeout(() => {
//     console.log("Async task 2");
//     resolve();
//   }, 100);
// }).then(() => {
//   console.log("Asyn 2 resolved");
// });

// const promisThree = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve({
//       useename: "chai",
//       email: "abc@gmail.com",
//     });
//   }, 1000);
// });

// promisThree.then((user) => {
//   console.log(user);
// });

// const promisFour = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = false;
//     if (!error) {
//       resolve({ username: "khan", password: "1234" });
//     } else {
//       reject("ERROR: Somthing went wrong");
//     }
//   }, 1000);
// });

// promisFour
//   .then((user) => {
//     console.log(user.username);
//     return user.username;
//   })
//   .then((username) => {
//     console.log(username);
//   })
//   .catch((error) => {
//     console.log("error");
//   })
//   .finally(() => {
//     console.log("finaly the promis is either resolved or rejected");
//   });

// const promisFive = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = true;
//     if (!error) {
//       resolve({ username: "javascipt", password: "123123" });
//     } else {
//       reject("ERROR");
//     }
//   }, 1000);
// });

// async function consumePrimiseFive() {
//   try {
//     const response = await promisFive;
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }

// consumePrimiseFive();

///////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\

// async function getAllUsers() {
//   try {
//     const response = await fetch("https://api.github.com/users/nawaisjan");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("E", error);
//   }
// }

// getAllUsers();

///////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\
fetch("https://api.github.com/users/nawaisjan")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));
