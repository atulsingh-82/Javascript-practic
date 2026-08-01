// ++++++ Filter method +++++++

/*const marks = [10,20,30,40,50,60,70,80,90,100];
const pass = marks.filter ((value) => (value >=50) );
//console.log(pass)

const num = [1,2,3,4,5,6,7,8,9,0,6,2,5,3];
const bigerno = num.filter((no) => (no > 4) );
//console.log(bigerno)

const score=[30,24,54,65,23,12,90];
const qualify= score.filter((value)=>{
    return value <=35;
});
//console.log(qualify)*/

/*const books = [
  {
    title: 'Book One',
    genre: 'Fiction',
    publish: 1981,
    edition: 2004
  },
  {
    title: 'Book Two',
    genre: 'Non-Fiction',
    publish: 1992,
    edition: 2008
  },
  {
    title: 'Book Three',
    genre: 'History',
    publish: 1999,
    edition: 2007
  },
  {
    title: 'Book Four',
    genre: 'Non-Fiction',
    publish: 1989,
    edition: 2010
  },
  {
    title: 'Book Five',
    genre: 'Science',
    publish: 2009,
    edition: 2014
  },
  {
    title: 'Book Six',
    genre: 'Fiction',
    publish: 1987,
    edition: 2010
  },
  {
    title: 'Book Seven',
    genre: 'History',
    publish: 1986,
    edition: 1996
  },
  {
    title: 'Book Eight',
    genre: 'Science',
    publish: 2011,
    edition: 2016
  },
  {
    title: 'Book Nine',
    genre: 'Non-Fiction',
    publish: 1981,
    edition: 1989
  }
];*/

// const userbook = books.filter((kitab)=> (kitab.genre ==="Fiction"));
// console.log(userbook)

// const userbook = books.filter((bk)=>(bk.genre === "History"));
// console.log(userbook)

// const userbook = books.filter((bk)=>(bk.publish >=2000));
// console.log(userbook)

// const userbook = books.filter((bk)=>(bk.title === 'Book Five'));
// console.log(userbook)

// const username = books.filter((bk)=>(bk.genre ==='Fiction'&&
//     bk.publish >1985
// ))
// console.log(username)


// //              ++++++++ MAP +++++++
// // map is used for add the numbers
// const number = [1,2,3,4,5,6,7,8,9,0];
// const newNum = number.map((num)=>(num+1));
// console.log(newNum)

// // Chaining se multiple method ek saath apply kr shakte hai
// const score =[ 20,43,23,5,54,32,99];
// const newScore =score.map((sc)=>(sc +2))
//                      .map((sc)=>(sc *2))
//                      .filter((sc)=>(sc >= 50));
//       console.log(newScore);
      
// ++++++++++ REDUCE +++++++++
// subko add kr ke ek krna

// const number=[1,2,3,4,5] // Function method
// const total= number.reduce((sum , value) => {
//   console.log(`sum: ${sum} value:${value}`)
//   return sum + value
// }, 0);
// console.log(total);

// const price =[ 10,32,43,25] // call back fuction method
// const total= price.reduce((mrp,mrp2)=> mrp+mrp2,0);
// console.log(total)

// shoping card
/*const shopingCard =[
  {
    itemName: "js course",
    price:999
  },

  {
    itemName: "web Course",
    price: 899
  },
  {
    itemName: "Python Course",
    price: 1999
  },
  {
    itemName: "Java Course",
    price: 2999
  }
];
const total= shopingCard.reduce((item,mrp)=> item+mrp.price,0);
console.log(total)*/

const shopingCard=[
  {
    item: "biscute",
    price:23
  },
  {
    item:"chocolate",
    price:99
  },
  {
    item:"namak",
    price:15
  }
];
const total = shopingCard.reduce((item,item2)=>item+item2.price,0);
if (total>=100) {
  console.log("you are eleagble for offer")
}
console.log(total)

