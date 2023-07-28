// forin loop gives the Key of object.
// forof loop gives the value of object

const arr = [1,2,3,4,5,6]

for (const i of arr) {
//    console.log(i); 
}

const greeting = 'Hello World!'
for (const greet of greeting) {
    console.log(greet);
}


const map1 = new Map();
map1.set('a',1)
// console.log(map1)


const language = {
    js: 'JavaScript',
    py: 'Python',
    cpp: 'C++',
    rb: 'Ruby'
}

for (const key in language) {
    console.log(`${key} shortcut is for ${language[key]}`);
}


// forEach
const coding = ['js', 'ruby', 'java', 'python', 'cpp']

// coding.forEach( function (item) {
//     console.log(item)
// })

// Similar
// coding.forEach((item, i) => console.log(item + ' ' + i))

function printMe(item) {
    console.log(item)
}

// coding.forEach(printMe)


const myCode = [
    {
        languageName : 'JavaScript',
        languageFileName : 'js'
    },
    {
        languageName : 'Java',
        languageFileName : 'java'
    },
    {
        languageName : 'Python',
        languageFileName : 'py'
    },
]

myCode.forEach((val) => console.log(val.languageName))