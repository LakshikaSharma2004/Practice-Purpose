if(true){
    let username="Lakshika"

    if(true){
        let website=" github"
        console.log(username+website)
    }
    // console.log(website)   gives error out of scope
}
// console.log(username)      gives error out of scope






console.log(AddOne(4)) //this will not give error
function AddOne(num){
    return num+1
}

//console.log(AddTwo(num))            //this will give error as it is declared as an expression
const expression=function AddTwo(num){
    return num+2
}