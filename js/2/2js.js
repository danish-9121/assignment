//var let const

//---------------------------var------------------
//var old js mein tha 
//var function scoped hota hai => var apne parent func mein kahi bhi use ho sakta hai
//var add itself to the window object

// browser gives us 3 thing windows (features alert, prompt, etc), stack, heap
// alert => write (windows) on console to see all the list
// prompt
// console

//eg => 2
// function abcd(){
//     for(var i=1; i<12; i++){
//         console.log(i);
//     }
//     console.log(i);
// }

// abcd();

// function abc(){
//     for(let i=1; i<12; i++){
//         console.log(i);
//     }
//     console.log(i); //it will show error here
// }

// abc();

//eg => 3
// var a=12;  //data exposion change in the window


//-------------------------let------------------------
//let const new js mein hai
//let const braces scoped hota hai
//let const doesn't add 

//eg => 3
// let b=12;

//js language mein kuch cheeje nahi hai jo hum use kar 
//sakte hai aur wo cheeje hum js se nahi balki browser 
//se milti hai, aise saare features jjo js ka part nahi
//hai but fir bhi use kar sakte hai unhe hum dhoond
//skte hai ek particular object mei jiska naam hai 
//window

//js mein kai saare features hai par kuchh features jo 
//hum use karte hai wo features wo nahi hai par fir bhi 
//use kar paate hai kyuki wo features js language use kar
//leti hai window se, aur window hai ek box of features 
//given by browser to use with js

//---------------Browser context api---------------------//


//----------------------Stacks--------------------//

//-----------------------------heap------------------//
//jitne bhi variables ya data hum baanaate hai unhe 
//store kahi to karna padta hai uske liye hota hai heap
//memory

//eg => 1+2+3+4+5+6 starting 3 the value is stored in heap 

//-----------------------Execution context (imaginary container) ----------------------//
//execute context matlab jab bhi ham function 
//chalaayege fnc apna ek imaginary container
//bana lega jis mein uski teen cheeje hogi :
// 1) variables
// 2) functions inside thaat parent fnc
// 3) lexical environment of that function 
//ye jo container hai imaginary ise hi hum execution kahte hai

// when we call the function a imaginary dabba is created
// Q:- computer bhi ek imaginary dabba bana leta h imaginary dabba sochle  

// function abcd(){
//     var a=12;
//     function def(){
//         var b=12;
//     }
// }

//              Execution Context
//      ____________________________
//      |                           |
//      |    a             def      |
//      |                           |
//      |     Lexical Execution     |
//      ____________________________
// execution context is a container where the function's code is 
// executed and it's created whenever a function is called, it contains
// 3 things, variables, functions and lexical environment.

//-----------------------Lexical Environment (Scope Chain) ----------------------//
// lexical environment hota hai ek jisme ye likha hota hai ke 
// aapka particular function ki cheejo ko access kar sakta hai and 
// kinko nahi, matlab ki it holds it's scope and scope chain

//------------------------Hoisting---------------------//

//-----------------------Types in js---------------------//

//----------------------- How to coopy reference value ------------//
// we are using var because the o/p takes var console
// var a=[1,2,3,4,5];
// var b=a;
// b.pop();
// console.log(b) //instead console we can write b and a in the console also
// console.log(a)

// var a = [1,2,3,4,5];
// var b = [...a]; //(...(only 3 dot) spread operator)
// b.pop();

// var obj = {name: "harsh"};
// var copyobj = {...obj};
//copyobj.name = "harshita"
// console.log(copyobj);

//--------------------truthy vs Falsy----------------------//
// js mei kichh bhi likho wo mainly so prakaar mein se kisi ek
// prakaar ko belong karti hai, Truthy and Falsy are different from truth and false.
// eg harsh (truthy or falsy)

//falsy values ye hai => 0, false, undefined, null, NaN, document.all.
// truthy values =>

// if(7){
//     console.log("hey")
// }
// else{
//     console.log("hello")
// }

// if(0){ // value from these are falsy values 0, false, undefined, null, NaN, document.all.
//     console.log("hey")
// }
// else{
//     console.log("hello")
// }

//---------------------Switch(is not to used)--------------------//
// switch(1){
//     case 1:
//         break;
//     case 2:
//         break;
//     default:
// }

//-------------------------for each loop----------------------------//
//foreach loop srf array pe chalta hai matlab ki jab bhi tumhaare 
//paas ek array ho, tab use mein kaun aata hai foreach loop

// var a = [1,2,23,34,34,4,23,4,3,45,54,3,23];

// a.forEach(function(val){ //val a standard word
//     console.log(val+2);
// })

// for each kabhi bhi by default aapke array mein change nahi karta wo 
// aapko changes krke deta hai array ki temporary copy par jidke wajah 
// se array humesha same rehta hai

// var a = [1,2,3,4,5];

// a.forEach(function(val){
//     console.log(val+2);
//     //console.log(a) //o/p five times the same line will be printed
// })

//-----------------------for in------------------//
// objects par loop karne ke liye hota hai forin loop
// var obj={
//     name: "harsh",
//     age: 24,
//     city:"bhopal"
// }

// for(var key in obj){
//     console.log(obj)
//     console.log(key)
//     console.log(obj[key])
//     console.log(key, obj[key])
// }

//----------------------Do whie------------------------//
// var a = 120; //120 is smaller than 15 then also hey will be printed one time

// do{
//     console.log("hey");
//     a++
// }
// while(a<15)

//------------------------Call back function-----------------------//
//jab bhi koi aisa code jo baad me chalta hai aap likhoge, kyuki wo 
//code baad mein chalta hai js ko ye pata nahi hota ke wo complete hua
//ya nahi, aise code ke completion par js ko btaya jaata jai ke wo 
//complete hogaya aur aap use chala sakte ho, ye bataane ka kaam
//callback ka hai

// setTimeout(function(){
//     console.log("2 second baad chala");
// },2000); // 2sec 1000=1sec 2000=2sec

//aisa code jo baad me chalta hai use hum ek function dedete hai ke 
//bhaiya jab complete hojaana to ye function chala dena, aur wo 
//function jo hum dete hai wo ek normal function hi hota hai aur use kahte
//hai callback function

//---------------------First class function----------------//
//js mei ek concept hai jiska matlab hota hai ki aap fnc ko use
//kar sakte ho as a value

// var a = true;
// var a = undefined;
// var a = null;
// var a = {}; //object
// var a = []; //array
// var a = function(){}; //functions

// function abcd(a){

// }
// abcd(12)

// function abcd(a){
//     a();
// }
// abcd(function(){console.log("hey");})

//-----------How arrays arre made behind the scene-----------//
// var arr=[1,2,3,34,4,5,6] // write (type of[]) in console
// console.log(typeof[])

// arr[3]=2;
// arr[-1]=2;

// console.log(Array.isArray([])) //True
// console.log(Array.isArray({})) //False

// var arr = [22,453,3,2344];
// arr={
//     0: 221,
//     1: 452,
//     2: 3,
//     3: 2344
// }

//----------------------How to delete Object Props-------------------//
// var a={
//     name:"harsh",
//     age: 24
// }

// delete a.age;
// delete a.name;