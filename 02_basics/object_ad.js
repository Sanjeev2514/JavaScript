// Singleton object

const tinderUser = new Object()

tinderUser.id = '1231'
tinderUser.name = 'Ayush'
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const obj1 = {1: 'A', 2: 'B'}
const obj2 = {3: 'A', 4: 'B'}
const obj3 = {5: 'A', 6: 'B'}

// assign method take two argument 'target' and 'source'.
// const obj4 = Object.assign({}, obj1, obj2, obj3)

const obj4 = {...obj1, ...obj2}
// console.log(obj4);


// both keys and values return the Array
console.log(Object.keys(tinderUser)); // [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser)); // [ '1231', 'Ayush', false ]

console.log(Object.entries(tinderUser));
console.log(Object.hasOwnProperty('name')); // true


// *******************************

const course = {
    coursename: 'javascript',
    price: '999',
    instructor: 'Hitesh'
}
// object destructure
const {instructor: sir} = course

// console.log(instructor);
console.log(sir);