// DOM (Document Object Model)
// What is DOM (Document Object Model)
// 4 Pillars of DOM
// simple example of bulb or whatever clicking on the same button
// Multiple events
// selecting multiple elements at a same time
// setTimeout
// setInterval
// future projects

// 4 Pillars of DOM

// 1. Selection of an Element (document,querySelector)
// 2. Changing HTML (a.inner.HTML)
// 3. Changing CSS  (a.style)
// 4. Event Listener (a.addEventListener)

//------------------- Selection of an Element ------------// 
// document.querySelector("#box")
// document.querySelector(".box")
// var a = document.querySelector("h1") // For multiple selecting we put it in a variable
// console.log(a)

//---------------------- Changing HTML ----------------------//
// var a = document.querySelector("h1")
// a.innerHTML = "Changed HTML"  //html padh lo frands => changed HTML

// document.querySelector("h1").innerHTML = "hui" // For oneline

// var a = document.querySelector("h1")
// a.innerHTML = "hihihi"

//-------------------- Changing CSS ---------------------//
// var a = document.querySelector("h1")
// a.style.color = "yellow" // a.style.youtube.css.color
// a.style.backgroundColor = "black"

//------------------------ Event Listener ---------------//
// var a = document.querySelector("h1")
// a.innerHTML = "Kaise ho aap log"
// a.style.color = "yellow"
// a.style.backgroungColor = "#000"

// var a = document.querySelector("h1")
// a.addEventListener("click",function(){
//     console.log("hey")
// })

// var a = document.querySelector("h1") // pehle mei o/p console mei hua tha abhi click karne pe hua h
// a.addEventListener("click",function(){
//     a.innerHTML = "Badal gya hu mai "
//     a.style.color = "yellow"
//     a.style.backgroundColor = "#000"
// })

//------ simple example of bulb or whatever clicking on the same button -------------//
var bulb = document.querySelector("#bulb")
var btn = document.querySelector("button")

var flag = 0

btn.addEventListener("click",function(){        // only for one time glow
    bulb.style.backgroundColor = "yellow"
})

btn.addEventListener("click",function(){ 
    if(flag==0) {
        bulb.style.backgroundColor = "yellow"
        console.log("Clicked")
        flag = 1
    } else {
        bulb.style.backgroundColor = "transparent"
        console.log("Again clicked")
        flag = 0
    }
})

//---------------- selecting multiple elements at a same time ---------//
// var h = document.querySelectorAll("h2") //out of 3 it will only select only the 1st h2 
// console.log(h) // o/p with nodelist

// h.forEach(function(e){  //ForEach to print multiple h2 
//     console.log(e)
// })

//-------------- setTimeout setInterval -------------//
// document.getElementById("box")  // By id
// document.getElementByClassName("box") // By Class

var h = document.querySelector("h3")
// h.innerHTML = "bye"
// h.textContent = "bye"

var box = document.querySelector("#box")
box.innerHTML = "<h3>Hello</h3>" //h3 is converted into h1 tag
box.textContent = "<h3>Hello</h3>" //h3 will be visible

