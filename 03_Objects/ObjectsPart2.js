const user=new Object()   //Singleton Object

user.name="Lakshika"
user.age=20
user.Email="LakshikaSharma@google.com"

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

// const obj3=Object.assign({},obj1,obj2)    //agar {} nhi lgaenge to target value obj1 bn jaega
//                          //(targetvalue,sourcevalues)

const obj3={...obj1,...obj2}   //spread operator

console.log(obj3)





const userarray=[
    {name : "Lakshika"},
    {id : 12779},
    {age : 20}
]

console.log(userarray[1])


console.log(Object.keys(user))                  //   --
console.log(Object.values(user))                //    | - array type
console.log(Object.entries(user))               //   --

console.log(user.hasOwnProperty("name"))