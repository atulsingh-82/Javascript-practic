// for of loop
// // forOf loop in array
// let Array =[1,2,3,4,5];
// for (const num of Array) {
//     //console.log(num);
// }

// // forOf loop in object
// let object="hello world!";
// for (const obj of object) {
//     console.log(obj);
// }

//  // Map  ye buss unique on=bject ko hi print krta h
//   const map = new Map()
//   map.set("IN => India")
//   map.set("PAK => Pakistan")
//   map.set("FR => France")
//   map.set("IN => India")
//   console.log(map)

 // Map mai loop lagana  
//  const map = new Map()
//   map.set("IN => India")
//   map.set("PAK => Pakistan")
//   map.set("FR => France")
//   map.set("IN => India")
//   for (const [key , value] of map){
//     console.log(key , value)
// }
// object pe loop kaise lagay
const object = {
  name : "Atul singh",
  age : 23
}
for (const key in object) {
  console.log(key, object[key])
}
 



