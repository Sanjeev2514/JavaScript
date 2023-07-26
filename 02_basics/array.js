const marvelHero = ['thor', 'Ironman','Spiderman']
const dcHero = ['Superman', 'Batman', 'joker']

// marvelHero.push(dcHero);

// console.log(marvelHero); 
// [ 'thor', 'Ironman', 'Spiderman', [ 'Superman', 'Batman', 'joker' ] ]

const allHeros = marvelHero.concat(dcHero)
console.log(allHeros);


console.log(Array.isArray('Sanju'));
console.log(Array.from('Sanju'));


let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));