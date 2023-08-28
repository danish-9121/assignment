// prompt("Enter a number")

/*  Math.random()*10 
    Math.floor(1.2)
    Math.floor(Math.random()*10)    
*/

/* jispe click karoge wo element par Event raise hoga, aur 
event listener naa milne par event element ke parent par 
listener dhundhega, waha bhi naa milne par event parent ke parent ke 
parent par listener dhundega*/

/* neela jo h wo number h aur kala jo h wo string h */


// var timer = 60; //bug in timer the game will be continued
// var score = 0;
var hitrn = 0; //hitrn mei random function store hoga or wo random number var hitrn mei store hoga or ab var global h toh kahi bhi usko use kar sakte h.

function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

/*---------------------- Hit -------------------------*/
function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = rn;
}

/*---------------------- For Bubble -----------------*/
function makeBubble(){
    var clutter="";

for(var i=1; i<=168; i++){ 
    var rn = Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${rn}</div>`;
}

document.querySelector("#ptm").innerHTML = clutter;
}

/*---------------------- Timer ---------------------*/
var timer=60; /* See This content again*/ 
function runTimer(){
    var timerint = setInterval(function(){
        if(timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else{
            clearInterval(timerint); /* Timer will is stoping with this code*/ 
            document.querySelector("pbtm").innerHTML = `<h1>Game Over</h1>`; //the screen will be cleared
        }
    },1000)

}

/* --------------------- Clicked Num (Neela and kaala)---------- sab se zyada function ismei call hua h*/
document.querySelector("#pbtm")
.addEventListener("click", function(dets){
    var clickednum = (Number(dets.target.textContent)); //dets.target se div aaya .textContent se value and Num for integer
    // alert("chal raha hai")
    if(clickednum === hitrn){
        increaseScore();  //calling the increase score funnction inside a for loop
        makeBubble();
        getNewHit(); //we can make a new type or version the pressed button disable ho jayega or remaining bubble pe click karna hoga.
    }

})
runTimer();
makeBubble();
getNewHit();
increaseScore(); //We won't call the function  because the value will be 10 automatically so Event Bubbling concept come.