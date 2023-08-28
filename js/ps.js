// //chapter 1 Q1
// let a= "Harry"
// let b=6
// console.log(a+b)

// //Q2
// console.log(typeof (a+b))

// //Q3
// const c="Danish"
// c="hi"


//----------------FUNCTIONS----------------------
// function onePlusAvg(x,y){
//     console.log("Done")
//     return Math.round(1+(x+y)/2)
// }

// let a=1;
// let b=2;
// let c=3;

// console.log("One Plus average of a and b is",onePlusAvg(a,b))
// console.log("One Plus average of b and c is",onePlusAvg(b,c))
// console.log("One Plus average of a and c is",onePlusAvg(a,c))


// const sum=(p,q)=>{
//     return p+q
// }
// console.log(sum(9,7))

//---------No value returning function (function without parameters)---------------
// const hello=()=>{
//     console.log("Hey how are you I am toh fine yaar")
//     return "hi"
// }

// hello()

// let v =hello()
// console.log(v) // o/p both the line 

// console.log(hello()) //o/p 1st line + hi

//---------------------EXERCISE--------------
// let danish={
//     harry: 90,
//     shubham: 9,
//     lovish: 56,
//     Monika: 4,
// }

// //Problem 1 for loop
// for (let i=0; i<Object.keys(danish).length;i++){
//     console.log("The marks of "+Object.keys(danish)[i]+" are "+danish[Object.keys(danish)[i]])
// }

// //Problem 2 for in 
// for (let key in danish){
//     console.log("The marks of "+key+"are "+danish[key])
// }

// //----------------Problem 3---------
// let cn = 43  //bug in ok and cancel button the program will be in the infinite loop
// let i
// while (i != cn){
//     i=prompt("Enter a number")
//     console.log("Try Again")
    
// }
// console.log("You have entered a correct number")

// let cn = 43
// a=prompt("Enter the number")
// if (a==43){
//     console.log("You have entered a correct number") 
// }

// else{
//     console.log("Try")
// }

//-----------Problem 4---------
// const mean=(a,b,c,d)=>{
//     return(a+b+c+d)/4
// }

// console.log(mean(4,5,6,7))
// // mean(4,5,6,7)

//----------------swap---------------//
// let var1 = "one";
// var2 = "two";
// var3 = tempVar;

// console.log("After swap in var1 :",var1);
// consolelog("After swap is var2:", var2);

//---------max number-------//
// function findMaxNumberLong(num1, num2){
//     //1 Long syntax
//     if(num1>num2){
//         return num1
//     } 
//     else{
//         return num2
//     }
// }

// function findMaxNumberShort(num1, num2){
//     //2 Short syntax
//     if(num1<num2) return num1;
//     else return num2;
// }

// function findMaxNumberTernary(num1, num2){
//     //3 Ternary short syntax
//     return (num1>num2)? num1:num2

// }

// let checkMax1 = findMaxNumberLong(10,5);
// console.log("Max Long Number:",checkMax1)

// let checkMax2 = findMaxNumberShort(10,5);
// console.log("Max Short Number:",checkMax2)

// let checkMax3 = findMaxNumberTernary(10,5);
// console.log("Max Equal Number:",checkMax3)

//---------------Landscape----------------------//
// function isLandscape(width, height){
//     //3.ternary short syntax
//     return(width > height);
// }

// let checkWidthHeight1 = isLandscape(800,600);
// console.log("Landscape:", checkWidthHeight1);

// let checkWidthHeight2 = isLandscape(600,800);
// console.log("Landscape:", checkWidthHeight2);

// let checkWidthHeight3 = isLandscape(1024,768);
// console.log("Landscape:", checkWidthHeight3);

//-------------------Portrait---------------//
// function isPortrait(height, width){
//     //3.ternary short syntax
//     return(height > width);
// }

// let checkWidthHeight1 = isPortrait(800,600);
// console.log("Portrait:", checkWidthHeight1);

// let checkWidthHeight2 = isPortrait(600,800);
// console.log("Portrait:", checkWidthHeight2);

// let checkWidthHeight3 = isPortrait(1024,768);
// console.log("Portrait:", checkWidthHeight3);

//----------Landscape & Portrait-----------//
function isLandscapePortrait(height, width){
    //3.ternary short syntax
    if(height>width){
        return"Portrait"

    }else{
        return"Landscape"
    }
}

let check1=isLandscapePortrait(800,600);
console.log(check1);

let check2=isLandscapePortrait(500,600);
console.log(check2);

let check3=isLandscapePortrait(700,500);
console.log(check3);