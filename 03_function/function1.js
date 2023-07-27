function userName(name) {
    if(!name) {
        console.log('Please enter your name.');
    }
    return `Hello user ${name}`
}

// console.log(userName('Sanju'));


// using Rest operater passing multiple arguments
function calculateCartPrice(...num) {
    return num
}

console.log(calculateCartPrice(200, 23, 445, 2500));

const user = {
    username : 'Amit',
    price: 499
}

function handleObject(anyObj) {
    console.log(`Username is ${anyObj.username} and price is ${anyObj.price}`);
}

// handleObject(user)
handleObject({
    username: 'Ayush',
    price: 899
})


const arr = [300, 100, 370, 400]

function returnSecondValue(getArray) {
    return getArray[1]
}
console.log(returnSecondValue(arr));