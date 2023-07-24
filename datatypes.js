// Primitive

// 7 types : String, Number, Boolean, null, undefined, symbol, BigInt (these are call by value)

//  A symbol is a unique and immutable data type.
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId); // false

const storage = null

const bigNumber = 463476446144764716447463437n

// Reference (Non-primitive)

// Array, Object, Functions

const heros = ['shaktiman', 'hatim', 'sanju']

let mySelf = {
    name : 'Sanju',
    age : 22,
}

const myFunction = function() {
    console.log('Hello World !');
}

console.log(typeof bigNumber); // bigint
console.log(typeof storage); // object
console.log(typeof id); // symbol