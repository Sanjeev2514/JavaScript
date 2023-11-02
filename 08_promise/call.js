function SetUsername(username) {
    this.username = username;
  }
  
  function createUser(username, email, password) {
    // SetUsername(username)
    SetUsername.call(this, username);
  
    this.email = email;
    this.password = password;
  }
  
  const sanju = new createUser("Sanju", "sanju@gmail.com", 123);
  console.log(sanju); // createUser { email: 'sanju@gmail.com', password: 123 }
  console.log(sanju.email);
  