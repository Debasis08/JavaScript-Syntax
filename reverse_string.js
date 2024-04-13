
// Reverse a string using For Loop Function
const reverseString = (str) => {
     let reversed = "";

     for ( let i = str.length - 1 ; i >= 0 ; i-- ) {
        reversed += str[i];
     }

     return reversed;

}

console.log(reverseString("Hey ! Honey..."))


// Same Logic with in-built functions of JavaScript
const reverse_String = (str) => {
    return str.split("").reverse().join("");
}

console.log(reverse_String("Hey ! Honey..."))