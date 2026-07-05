/*if (true){
    let a=10
}
console.log(a)

if (true){
    var a=10
}
console.log(a)//10 ku ke var block scope follow nhi karta hai

if(true){
    const b=19
}
console.log(b)*/

//      Nested Scope

function one(){
    let username="atul singh";

    function two(){
        let website =" youtube"
        console.log(username + website)
    }
    two()
}
one()
