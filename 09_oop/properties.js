class User {
  constructor(username) {
    this.username = username;
  }
  lgoMe() {
    console.log(`username ${this.username}`);
  }
  static createId() {
    return `123`;
  }
}

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const jan = new User("jan");
//console.log(jan.createId());
const iphone = new Teacher("IPHONE", "IPHONE@GMAI.COM");
