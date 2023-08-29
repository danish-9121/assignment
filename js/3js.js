// WHOEVER FOLLOWS THIS BLINDLY
// ACHIEVES THE GREATNESS AND
// UNBEATABLE WISDOM IN JAVASCRIPT.

// higher order fncs
// constructor fncs
// first class fncs
// new keyword
// iife
// prototype
// prototypal inheritance
// this call apply bind
// pure & impure fncs
// closures (No)

//--------------------High order functions-----------//
//Higher Order Functions are the functions which accept a  
//function in a parameter or return a function or both.
// eg:- ForEach method always takes another function inside it,
// so ForEach is a higher order function.

//type 1
// function abcd(val){ 

// }
//abcd(12)
// abcd(function(){}) //Now higher order function

//type 2
// function abcd(val){  
//     return function(){}
// }
// abcd()

//type 2 another eg
//aisa fnc jo accept karle ek aur fnc ya fir wo return karde ek aur fnc

// var arr=[1,2,3,4,5]; 
// arr.forEach(function(){})

//----------------Constructor Function--------------//
// normal function jismein this ke istemaal ho and aap function ko call karte waqt new keyword ka 
// use karein

// function saanchaOfBiscuit(){
//     this.width=12;
//     this.height=22;
//     this.color="brown";
//     this.taste="sugary";

// }
// new saanchaOfBiscuit() // New Biscuit will be created
// var bis1 = new saanchaOfBiscuit() 
// var bis2 = new saanchaOfBiscuit()
// var bis3 = new saanchaOfBiscuit()

// jab aapke paas aisa koi bhi mauka ho ke aapko ek jaisi properties waale abhut saare 
// elements banaane hai us waqt aap constructor fnc use kar sakte ho

// function circularButtonBano(color){
//     this.rasius=2;
//     this.color=color;
//     this.icon=false;
//     this.pressable=true;
// }

// var redbtn = new circularButtonBano("red")
// var greenbtn = new circularButtonBano("green")

//-----------------------First Class------------------------//
// a Language is said to have first class functions when the
// functions in that language are treated as variables, you 
// can save them, you can pass them as arguments to another functions.

// var abcd =function(){

// }

// function abcd(){

// }
// abcd(function(){})

// setTimeout(function(){})   // Mostly used in setTimerout 

//------------------New----------------------//
// jab bhi new lagta hai humesha ek blank object apne maan mein bana lo
// new will create a blank object 

// {

// }

// function abcd(){
//     this.age=12;
// }
// new abcd() //new keyword will create a blank space as given below

// {
//     age: 12;
// }

//---------------------Iife------------------//
// immediately invoked function expression  
// iife hai function ko turant chalane ki kala. is tareeke se ki hum log koi private
// variable bana paaye

// (function(){
//     var a=12; //We cann't access the value of a eg:- jQuery, raect, angular framework

// })()

// var ans=(function(){
//     var privateval=12;

//     return {
//         age:12 //we can't write 12 write way is (getter function & console.log)
//     }
// })()

// var ans=(function(){ //write ans.getter in console you will get the privateval value 12
//     var privateval=12;

//     return {
//         getter: function(){
//             console.log(privateval);
//         },
//         setter: function(val){
//             privateval= val;
//         }
//     }
// })()

// ans.setter(24)
// ans.getter()   // Now the value is changed from 12 to 24 due to setter

//----------------Prototype---------------------------//
// Predefined functions (write all this in the console eg.length)
// var obj = {name:"harsh"}
// obj
// obj.hasOwnProperty("name")

//-------------Prototypal inheritance--------------//
// sarthak and muskan his student
// var human = {
//     canFly: false,
//     canTalk: true,
//     canWalk: true,
//     HashChangeEventemotions: true,
//     hadFourLegs: false //last sentence me commam nahi aayega
// }

// var sheriyansStudent = {
//     canMakeAmazingWebsite: true,
//     canMakeAwesomeAnimation: true,
//     canMakeWorldClassAwardWebsite: true,
// }

// sheriyansStudent.__proto__ = human; //write sheriyansStudent in Console

//----------------This call apply bind (This keyword)------------//

// global => window
// function => window
// method => obj (always refer to parent obj)

//jab bhi kuchh likh rahe ho check karo kya usmein kahi bhi koi fuction, object ya 
//fir scope bana hai {}
//jab bhi koi cheej {} brackets ke andar nahi hot to hum use global scope kahte hai

// var a=12; //global scope
// function abcd(){
//     var a =12; //not global scope 12 is in abcd local scope
// }

// Global scope mein this ki value window hoti h
// console.log(this)

// Function scope mein 
// function abcd(){
//     console.log(this)
// }
// abcd();

// Method Scope main this ki value obj hoti h
// ek function jo object ke andar ho, use method kahte hai
// in any method, "this" keyword always refers to parent object

// var obj={
//     name: "Harsh",
//     baatkaro: function(){ // this is called as method
//         console.log(this)
//     } 
// }
// obj.baatkaro();

// Event Listener
// var button = document.querySelector("button");
// button.addEventListener("click", function(){
//     console.log(this); // o/p button
//     this.style.color="red"; // o/p because this is refering button  

//     button.style.color="red"; // we can use button but this is imp in this keyword 
// })

//------------ Call Apply Bind --------------- bind is mostly used react// 
// Agar tumhare paas koi function hai and koi object hai and tumhe 
// function chalana hai aur by default jo this ki value window hai use windoe naa rakh kar
// point karwana hai kisi object ki taraf

// function abcd(){
//     console.log(this);
// }

// var obj = {age:24}
// abcd(); // o/p window
// abcd.call() // by default it is window
// abcd.call(obj) //.call (now this will become obj)

// function abcd(){  
//     console.log(this.age); // need to understand this program line ans in next comment
// }

// var obj = {age:24}
// abcd.call(obj) // obj chala jaye this mei (this.age) obj ke value=24 so o/p 24


// function abcd(val, val2, val3){
//     console.log(this, val, val2, val3);
// }

// var obj = {age:24}

// abcd.call(obj,1,2,3) 
// abcd.apply(obj, [1,2,3]) // array will not go in the parameter

// function abcd(){
//     console.log(this);
// }

// var obj = {age: 24}

// abcd.bind(obj); // no o/p because it is just binded

// var bindedfnc = abcd.bind(obj);
// bindedfnc();

//---------------- pure & impure fncs ----------------//

// 1) it should always return same output for same input
// 2) it will never change/updat the value of a global variable.

// function abcd(val){
//     return Math.random()*val;

// }

// var ans1 = abcd(2);
// var ans2 = abcd(2);

function abcd(a,b){ // condition 1) pure function
    return a*b;
}

var ans1 = abcd(1,2);
var ans2 = abcd(1,2);

var abcdef = 12;
function abcd(a,b){ //  condition 2) impure function
    abcdef = 24; 
    return a*b;
}

var ans1 = abcd(1,2);
var ans2 = abcd(1,2);


