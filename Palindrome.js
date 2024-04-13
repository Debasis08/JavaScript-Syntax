// reverse is same as original string. Example: RACECAR

const palindrome = text => {
    
    const reverseStr = text.split("").reverse().join("");

    return text === reverseStr;
}

console.log(palindrome("join"))
console.log(palindrome("racecar"))