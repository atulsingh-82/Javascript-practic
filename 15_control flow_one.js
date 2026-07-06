// Notes ===== () => paranthises

// If(true) to ander ka code execuate hoga 
// If(flase) to ander ka code execuate nahi hoga

let temp = 34
if(temp>40){
    console.log(`Too hot: ${temp}`);
}
else if(temp ===40){
    console.log(`Normal:${temp}`);
}
else{
    console.log(`low: ${temp}`)
}

let score =500
if(score>1000){
    console.log(`exclent score and the score is: ${score}`);
}
else if(score>800){
    console.log(`Good and the score:${score}`);
}
else if(score===500){
    console.log(`Average and Score: ${score}`);
}
else if(score>300){
    console.log(`Score is below avg: ${score}`);
}
else{
    console.log(`Failed: ${score}`)
}

// user check +++ [&&] = used for both statement true age ek bhi glt huwa false hoga 
let userlogin = true;
let userdebitcard = true;
let userloginfromgoogle = false;
let userloginfromemail = true;


  if(userlogin && userdebitcard){
    console.log("Elegble for shoping")
  }
  if(userloginfromgoogle || userloginfromemail){
    console.log(`Loged in`)
  }
  
 
   
  
