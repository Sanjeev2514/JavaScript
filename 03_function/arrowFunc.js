const user = {
    username: 'Sanju',
    price: 999,

    welcomeMessage : function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}
// this keyword refers to the current context

// user.welcomeMessage()
// user.username = 'Ayush'
// user.welcomeMessage()

// At a node environment this keyword refers to the empty Obejct {}. And in browser it refers to window

// console.log(this);

// function code() {
//     const username = 'Sanju'
//     // console.log(this);
//     console.log(this.username); // this will not working
// }
// code()


const code = () => {
    const username = 'Sanju'
    console.log(this);
}
code()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2

const addTwo = (num1, num2) => (num1 + num2)

console.log(addTwo(5,6));