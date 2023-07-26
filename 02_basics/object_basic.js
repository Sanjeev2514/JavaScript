// object literals

const mySym = Symbol('key1')
const user = {
    name : 'Sanju',
    'full name': 'Sanju Kansyakar',
    age: 22,
    [mySym]: 'key2',
    location : 'Mumbai',
    email: 'sanju@gmail.com',
    isLoggedIn: true,
    lastLoginDays: ['Monday', 'Friday']
}

console.log(user.email);
console.log(user['email']);

console.log(user['full name']); // Only this way can access the value

console.log(user[mySym]);
console.log(typeof user[mySym]);
console.log(typeof mySym);

user.email = 'sanju@google.com'
// Object.freeze(user) // it freeze the object can't change the properties
user.email = 'sanju@yahoo.com'
console.log(user);

user.greeting = function() {
    console.log(`Hello user, ${this.name}`);
}

console.log(user.greeting());