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
// closures

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