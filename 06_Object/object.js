// Note: new keyword
// 1) new keyword creates empty object which also known as instance.
// 2) constructor function call because of new keyword
// 3) whatever argument passed in comes inside the this keyword.
// 4) After that it return the object

function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
  
    this.greeting = function () {
      console.log(`Welcome, ${this.username}`);
    };
  
    return this;
  }
  
  const user1 = new User("Sanju", 10, true);
  const user2 = new User("Ayush", 25, false);
  
  // console.log(user1);
  // console.log(user2);
  // console.log(user1 instanceof User); // true
  
  // Object and prototype
  
  // function is function and also object
  function multipleBy5(num) {
    return num * 5;
  }
  
  multipleBy5.power = 7;
  
  console.log(multipleBy5(5)); // 25
  console.log(multipleBy5.power); // 7
  console.log(multipleBy5.prototype); // {}
  
  function createUser(username, score) {
    this.username = username;
    this.score = score;
  }
  
  createUser.prototype.increment = function () {
    this.score++;
  };
  
  createUser.prototype.printMe = function () {
    console.log(`Score is ${this.score}`);
  };
  
  const dhoni = new createUser("Dhoni", 125);
  console.log(dhoni.printMe());
  
  /*
  
  Here's what happens behind the scenes when the new keyword is used:
  
  A new object is created: The new keyword initiates the creation of a new JavaScript object.
  
  A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.
  
  The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.
  
  The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.
  
  */
  