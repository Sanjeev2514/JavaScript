// Es6

class User {
    constructor(username, email, password) {
      this.username = username;
      this.email = email;
      this.password = password;
    }
  
    encryptPassword() {
      return `${this.password}abc`;
    }
  
    changeUsername() {
      return `${this.username.toUpperCase()}`;
    }
  }
  
  const sanju = new User("Sanju", "sanju@gmail.com", 421);
  console.log(sanju);
  console.log(sanju.encryptPassword());
  console.log(sanju.changeUsername());
  
  // Inheritance
  
  class Users {
    constructor(username) {
      this.username = username;
    }
  
    logMe() {
      console.log(`Username is ${this.username}`);
    }
  }
  
  class Teacher extends Users {
    constructor(username, email, password) {
      super(username);
      this.email = email;
      this.password = password;
    }
  
    addCourse() {
      console.log(`A new course was added by ${this.username}`);
    }
  }
  
  const ayush = new Teacher("Ayush", "ayush@gmail.com", "123");
  console.log(ayush);
  ayush.addCourse();
  ayush.logMe();
  