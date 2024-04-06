//Es6

// class User {
//   constructor(username, email, password) {
//     this, (username = username);
//     this.email = email;
//     this.password = password;
//   }

// encryptPassword() {
//   return `${this.password}abc`;
// }
// }
const chai = new User("chia", "email", "12321");

//\\//\\//\\

function User(username, email, password) {
  this, (username = username);
  this.email = email;
  this.password = password;
}
User.prototype.encryptPassword = function () {
  return `${this.password}abc`;
};
const tea = new User("tea", "tea@gmail.ocm", "123");

console.log(tea.encryptPassword());
