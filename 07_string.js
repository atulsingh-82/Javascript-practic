let name = "atul";
let age = 21
let mob = 8114025558

// `` ye esc ke niche jo key h oh hota h isko  backtick kahte hai 
// (single cote ' ye wala nhi h)
// console.log(`my name is ${name} 
// my age is ${age}`);

// for length
console.log(name.length);

// for charactor access koun sa word kaha pe h
 let str = "hello world"
console.log(str[2]);

//toUpperCase  sare words ko capital letter mai karta hai
let str1 ="abcdefgh";
console.log(str1.toUpperCase());

//toLowerCase => sare words ko small letter mai convert kr deta hai
let str3 = "       AbcDRFD";
console.log(str3.toLowerCase());

//trim => extra space ko hta deta hai
let str4 = "   atul singh   " ;
console.log(str4.trim());

//slice => jitna no doge utha hi words output dega
let str5 = "ilearning coding"
console.log(str5.slice(0,7));

// replace => ye words ko replace karta hai
let str6 = "atul singh";
console.log(str6.replace("singh","prasad"));

//Includes => check krta h words persent h ya nhi
let str7 = "singh is king";
console.log(str7.includes("is"));

// IndexOf => position batata h
let str8 = "atul singh";
console.log(str8.indexOf("i"));

// concat => strings ko add krta h
let str9 ="sin";
let str10 = "gh";
console.log(str9.concat("",str10));



// string concatenation =>


// Template literals =>
console.log(`my name is ${name}
my age is ${age}
my mobile no is ${mob}`); 

