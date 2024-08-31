// # Premitive --> Hamasa call by value hota hai mean copy pass hota hai
// 7: Type:
// string
// Number
// Boolean
// null --> mean empty
// Undefined 
// Symbol --> Kisi value ko unique bana ka liya use hota hai
// let id = Symbol('123')
// let anotherId = Symbol('123')
// console.log(id === anotherId);  //** Return false Symbol return always unique value.. chiaya ap uske ander kuch bhi value or same value pass ker do return alwaya unique value 


// BigInt 

// # Non Premitive or Reference type -->hamsa value call by reference pass hota hai
// Non Premitive Data Type ka  return typeOf  hamsa object hota hai 
// 3: Type :
// Array
// Objects -->V.V.I
// Function

// Note **
// Java script ka anader khabi bhi type explicite bata na nhi per ta hai mean this a dynamicely chenged
// JavaScript is a dynamic language and not static


// Arrays
let arr = ["Sovan", " code", "Cofe"]
// console.log(typeof(arr));  // -->Return object


//Object
let obj = {
    name : "Sovan",
    age: 21,
    gender: "Mail"

}
//console.log(typeof(obj));  //--> Return Object

//Function
let myFun = function(){
    console.log("Hello world!");
}
// console.log(typeof(myFun));  // Return function but isko bola jata hai object function




