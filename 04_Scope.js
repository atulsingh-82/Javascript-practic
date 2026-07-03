// scope batata hai ke veriable ko kaha se access key aja shakta h

let name = "atul singh";
console.log(name);
// yha name accessable h

// Globle Scope
let username = "atul singh";
function one(){
console.log(username)
}
one()

//Local Scope
//function ke ander bna veriable bahar access nhi hota hai
function userone(){
    let username2 ="atul prasad"
    console.log(username2);
}
userone()
console.log(username2)//referance error aayga 
//ku ke function ke bahar username exist hoi nhi krta h

//Block Scope {curley bracess ke ander bna veriable block mai hota hai}
/*if (true){
    let a=
    const b=
}
console.log(a);
console.log(b)*/
