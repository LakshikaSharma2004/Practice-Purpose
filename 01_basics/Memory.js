// Stack (Primitive datatypes k liye hota h jse ki String boolean Bigint number etc)
// isme value ki copy bnti h
//for eg.
let id=12779
anotherid=id
anotherid=1124

console.log(id)  //12779
console.log(anotherid)  //1124

//Heap Memory (NonPrimitive datatypes k liye hota h jse ki array object function)
//isme value ka reference milta h mtlb ki original value me change hota h
//for eg.

obj={
    name:"Lakshika",
    id2:12779
}
let obj2=obj
obj2.id2=1124

console.log(obj.id2)  //1124
console.log(obj2.id2) //1124

//isme obj1 ka reference obj2 bnta h fir mtlb agar obj2 me kuch change krenge to wo obj1 me bhi reflect hoga


