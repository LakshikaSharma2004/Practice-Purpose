//Object Literals
//Non Singleton object
const sym=Symbol("key1")
const JsUser={
    "full Name":"Lakshika",
    [sym]:"key1",      //to use sym as a symbol i have to put it in square brackets
    Email:"lakshikaSharma@google.com",
    age:20,
    name : "Lakshika"
}
console.log(JsUser.Email)   //ye shi tareeka nhi h
console.log(JsUser["Email"])   //ye shi tareeka h kyuki agar jse name double quotes me h to usko . k through access nhi kr skte h
//console.log(JsUser.full Name)   //ye error dega
console.log(JsUser["full Name"])
console.log(JsUser[sym])

//Object.freeze(JsUser) //ab koi bhi changes propagate nhi honge

JsUser.greetings=function(){
    console.log("Namste");
}

JsUser.greetingsTwo=function(){
    console.log(`Namaste,${this.name}`);
}

console.log(JsUser)
console.log(JsUser.greetings())
console.log(JsUser.greetingsTwo())


