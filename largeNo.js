// Find largest number in an array

const largeNo = number => {

    let largest = number[0];

    for (let i = 1 ; i < number.length ; i++ ) {
        if (number[i] > largest) {
            largest = number[i];
        }
    }

    return largest;
}

console.log(largeNo([2,4,6,9,2]));