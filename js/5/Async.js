// sync and async kya hota hai?
// async js hai kya ?
// js is not asynchronous (event loop v.imp)
// async ki poori kahaani.
// single threasing and multi threading

// callbacks => functions
// promises
// then and catch
// try and catch
// async await
// 5 use cases ekdum real world waale

// [concept aside]
// concurrency and parallelism
// throttling

// -------------- sync and async kya hota hai? -----------------//
// sync matlsb ek ke baad susra hoga, jab tak ek command complete naa ho, dusra shuru nahi hoga
// task a - 5
// task b - 2
// task c - 15
// task d - 1

// async matlab saare kaam ek saath shuru kardo, jiska answer pahle aajaye uska jawaab dedena

// Q:- kaise pata chalta hai ki hum sync code likh rahe h ya async

// setTimeout  // Async code
// setInterval
// promises
// fetch
// axious
// XMLHttpRequest

// console.log("12");
// console.log("hey");
// console.log("hey 2");
// console.log("hey 3");
// console.log("hey 4");

// ------------ async js hai kya ? -------------//
// kai baar aapka final code depended hota hai kisi aur ke server par, is case
// mein humein nahi pata hota ki answer uske server se kab laut kar aayega, to hum
// kya nahi kr skte is writing sync code, isse nipatne ke liye hum log async code
// likh dete hai taaki blocking naa ho and jab bhi answer aaye humara answer ke
// respect mein chalne waala code chal jaaye

// async code ka main motive hota hai ki un cases mein jismein hume pata nahi
// code ka answer kitni der mein aayega to jab bhi answer aa jaaye uske answer ke
// respect mein koi particular code chala dena

// facebook se photo laao aur jab photo aajaaye show kar dena

// setTimeout(callback, timeinms)
// console.log("hey");
// setTimeout(function(){}, 2000)
// console.log("hey2");

// console.log("hey");
// setTimeout(function(){
//     console.log("hey2");    
// }, 2000)

// callbacks fnc hummesha async code mein answer aane par chaltahai

//-------------------  js is not asynchronous -------------//
// async ka matlab hota hai do kaam ek sath hona lekin javascript do kaam ek sath nahi 
// karti h

// jo bhi main stack par hota hai wo output karta hai and jo bhi side stack par 
// hota hai wo behind the scene processing kar sakta hai aur jab uski processing
// complete ho use main stack mei n laa kar chalaya jaa sakta hai

// main stack => execution

// when the main stack is empty then the side stack is checked (MS=>synchronous SS=> asynchronous)
// event loop 

// First the Synchronous will be executed in the main memory  => ffrom side stack Asynchronous code will exeduted in the o/p
console.log("hey"); // Synchronous
console.log("hey2");// Synchronous
setTimeout(function(){ // Asynchronous
    console.log("hey3");
},0)
console.log("hey4"); // Synchronous

// ---------------- callbacks ----------------//
// fetch  // request
// axios
// promises 
// settimeout
// setinterval

// then cathch // answer
// callbacks
// async await


