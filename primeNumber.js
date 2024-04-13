const isPrime = number => {
    for (let i = 2; i <= number/2 ; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(15));
console.log(isPrime(7));