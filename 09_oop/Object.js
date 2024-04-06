function multplyBy5(num) {
  return num * 5;
}

multplyBy5.power = 2;

console.log(multplyBy5(5));
console.log(multplyBy5.prototype);

function createUser(usrname, score) {
  this.usrname = usrname;
  this.score = score;
}

createUser.prototype.increment = function () {
  scrore++;
};

