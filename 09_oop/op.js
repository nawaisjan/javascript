// const user = {
//   username: "kha",
//   loginCount: 8,
//   singedIn: true,

//   getUserDetails: function () {
//     console.log("got user details from db");
//     console.log(this.username);
//   },
// };

// console.log(username);

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  //return this;
}

const userOne = new User("khan", 1, true);
const userTwo = new User("khan", 1, true);

console.log(userOne);

//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\
//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\
