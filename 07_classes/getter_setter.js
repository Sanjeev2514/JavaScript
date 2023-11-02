// class based getter and setter
class User {
    constructor(email, password) {
      this.email = email;
      this.password = password;
    }
  
    get email() {
      return this._email.toUpperCase();
    }
  
    set email(value) {
      this._email = value;
    }
  
    // using getter can take the value as per the return
    get password() {
      return this._password.toUpperCase();
    }
  
    //   we can over write the value using setter and set them
    set password(value) {
      this._password = value;
    }
  }
  
  const sanju = new User("sanju@gmail.com", "abcd");
  console.log(sanju.password); //ABCD
  console.log(sanju.email); //SANJU@GMAIL.COM
  
  // one more way to define getter and setter using function base
  
  function Users(email, password) {
    this._email = email;
    this._password = password;
  
    Object.defineProperty(this, "email", {
      get: function () {
        return this._email.toUpperCase();
      },
      set: function (value) {
        this._email = value;
      },
    });
    Object.defineProperty(this, "password", {
      get: function () {
        return this._password.toUpperCase();
      },
      set: function (value) {
        this._password = value;
      },
    });
  }
  
  const cric = new Users("cric@buzz.com", "abc123");
  console.log(cric.email); // CRIC@BUZZ.COM
  
  // Object based
  
  const User1 = {
    _email: "one@gmail.com",
    _password: "ad112",
  
    get email() {
      return this._email.toUpperCase();
    },
  
    set email(value) {
      this._email = value;
    },
  };
  
  const one = Object.create(User1);
  console.log(one.email);
  