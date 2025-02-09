// Browser m jo global object h wo h window object

const x=() =>{
    let username="Lakshika"
    console.log(this.username)
}
x()


const add=(num1,num2)=>(num1+num2)      //parenthesis lgate h to return krne ki jarurat nhi pdti h
console.log(add(2,4))


const student=()=>({username:"Lakshika"})
console.log(student())