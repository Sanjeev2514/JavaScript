const promiseOne = new Promise(function (resolve, reject) {
    // Do an async task
    // DB calls, cryptography, network
  
    setTimeout(() => {
      console.log("Async task is complete");
      resolve();
    }, 1000);
  });
  // resolve method connects the then method means after resolving the promise it will comsume the promise
  promiseOne.then(function () {
    console.log("Promise consumed");
  });
  
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Async task 2");
      resolve();
    }, 1000);
  }).then(() => {
    console.log("Async 2 resolved");
  });
  
  const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ username: "Sanju", email: "sanju@gmail.com" });
    }, 1000);
  });
  
  promiseThree.then((user) => {
    console.log(user);
  });
  
  const promiseFour = new Promise((resolve, reject) => {
    const error = true;
    setTimeout(() => {
      if (!error) {
        resolve({ username: "Sanju", password: "123" });
      } else {
        reject("ERROR: Something went wrong");
      }
    }, 1000);
  });
  
  promiseFour
    .then((user) => {
      console.log(user);
      return user.username;
    })
    .then((username) => {
      console.log(username);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      console.log("The promise is either resolved or rejected.");
    });
  
  const promiseFive = new Promise((resolve, reject) => {
    const error = true;
    setTimeout(() => {
      if (!error) {
        resolve({ username: "JavaScript", password: "123" });
      } else {
        reject("ERROR: JS went wrong");
      }
    }, 1000);
  });
  
  async function consumePromiseFive() {
    try {
      const response = await promiseFive;
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
  
  consumePromiseFive();
  
  // fetch returns the promise.
  
  async function getAllUsers() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
  
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log("Error: ", error);
    }
  }
  
  getAllUsers();
  
  // Similar thing just using then and catch
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => console.log(error));
  
  //   A fetch() promise only rejects when a network error is encountered. A fetch() promise does not reject on HTTP error(404, etc.).
  