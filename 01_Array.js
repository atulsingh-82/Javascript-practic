
// Array ek special veriable hota hai
//  jisme bahut sare values store kr shakte hai

// how to create array

let number = [10,20,30];
console.log(number);

// lenght in array
let fruits = ["Apple","Banana","Orange"];
console.log(fruits.length);

// Add Element start mai
let fruits1 = ["apple","banana","orange"];
fruits1.unshift("mango");
console.log(fruits1);

// add element in end
let fruits2 = ["apple","orange"];
fruits2.push("gavava");
console.log(fruits2);

//Remove Element from start
let no =["81","14","025","558"];
no.shift();
console.log(no);

//Remove element from end
let no1 = ["81140","25558"];
no1.pop();
console.log(no1);


//value change karna
let school = ["vidyawati devi","mahila","vidyalaya"];
school[1]="maha";
console.log(school)

// item hai ya nhi
let bca = ["atul","sonelal","rakesh"];
let result = bca.includes("atul");
console.log(result);

//koe item kaha hai  [indexOf]
let room = ("pen","books","copy");
let table = room.indexOf("books");
console.log(table)

//har item badlo [map]
let x = [2,4,8,16];
let newX = x.map(x => x *2);
console.log(newX);

//sirf wahi item jo condition pass kre [filter]
let y = [1,2,3,4,5,6,7,8,9];
let z = y.filter(y =>5);
console.log(z);

//har item ke saath kuch kro [for each]
let d =["deepak","divyanshu","diya","divya"];
d.forEach(item => console.log(item));
