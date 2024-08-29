// let score = "33ab" ----------> return Nan  but type Confution 
// let score = "33"  -------------> return number
// let score = true  ----------------->return 1
// let score = "abcd" ----------> return Nan
//let score = undefined ----------> return Nan
let score = 33
// console.log(score);
// console.log(typeof(score));

let number = Number(score) 
// console.log(number);
// // That is given as NaN mean this is a not  a not a number 
// //That was its creat confution 

// console.log(typeof(number));


//---> Bollen conversion

// let isNumber = ""  ------>return false
// let isNumber = "Sovan" ----->return true
// let isNumber = 4 ------------->Return true
// let isNumber = 0 --------------->Return false
let isNumber = 1

let isNumberLoggedIn = Boolean(isNumber)
//console.log((isNumberLoggedIn));

//---------> String convertion

let num = 33
let numString = String(num)

// console.log(numString); // -------->Return String
// console.log(typeof(numString));




