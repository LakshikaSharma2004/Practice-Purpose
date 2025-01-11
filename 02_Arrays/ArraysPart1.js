const myarr=[1,2,3,4,5]
const myheros=["Lakshika","Hardik"]
const myArr2=new Array(1,2,3,4)
myarr.push(6)  //add
myarr.pop()    //remove
myArr2.unshift(7)  //add at start
myArr2.shift()     //remove from start
console.log(myarr)
console.log(myArr2)
console.log(myarr.includes(4)) //checks
console.log(myarr.indexOf(8))  //gives index , if index not present returns -1
const newArr=myarr.join()      //the new array is of string type 
console.log(newArr)


//slice 
console.log("A",myarr)
const n1=myarr.slice(1,3)  //isme si se lekr ei-1 tk k elements aate h
console.log(n1)            //aur original array manipulate nhi krta 


//splice 
const n2=myarr.splice(1,3)   //isme si se lekr ei tk ke elements aate h 
console.log(n2)              //aur original array amnipulate hota h
console.log(myarr) 