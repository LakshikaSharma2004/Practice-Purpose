//IMMEDIATELY INVOKED FUNCTION EXPRESSIONS
//global scope ke pollution se problem hoti h kai baar to uss global scope k jo variables h ya jo bhi koi declarations h unko htane k liye IIFE ko use krte h
(function func(){
    console.log("func 1")
})();


((name)=>{
    console.log(`this is ${name}`)
})("Lakshika")



