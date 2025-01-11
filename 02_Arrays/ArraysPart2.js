const marvelHeroes=["IronMan","Thor","Wanda","BlackWidow"]
const dcHeroes=["SuperMan","BatMan","Joker"]
//marvelHeroes.push(dcHeroes)
//console.log(marvelHeroes)   //accessing is not looking good

// const allheroes = marvelHeroes.concat(dcHeroes)
// console.log(allheroes)  //limitation -> can only concat one at a time

const allheroes=[...marvelHeroes,...dcHeroes]
console.log(allheroes)

const anotherArray=[1,2,3,[4,5,[6,7,[8]],9,10],11,12]
const flatArray=anotherArray.flat(Infinity)  //it makes the array flat and we write upto how mant should we want to make it flat in parenthesis
console.log(flatArray)

console.log(Array.isArray("Lakshika"))
console.log(Array.from("Lakshika"))  //makes array from given element
console.log(Array.from({Name : "Hardik"}))  // it cannot make key value pair an array

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3))
