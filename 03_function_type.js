
// Function Statement
a();        // "a called"

function a() {
    console.log("a Called");
}
a();        // "a called"



// Function Expression
b();        // "b is not a function"

var b = function () {
    console.log("b Called");
}
b();        // "b is called"



// Anonymous Function
// function (){
    // Does not work unless it is assigned to a variable like "function expression"
// }



// Named Function Expression
// Very similar to function expression, but SLIGHT diff
c();        // "b is not defined"

var b = function c() {
    console.log("c Called");
}
c();        // "c is not defined"



// First Class Functions
var p = function q() {
    return function xyz() {

    }
}
console.log(p());   //passing a function as an argument in which another funciton is written



