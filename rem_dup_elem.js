// for example: [1, 2, 3, 2, 4, 1, 5]  ->  [1, 2, 3, 4, 5]

// Not-Efficent Way
let str = [1, 2, 3, 2, 4, 1, 5];

const remElem = arr => {
    const uniqueElements = [];

    for (let i = 0 ; i < arr.length ; i++) {
        if (uniqueElements.indexOf(arr[i]) === -1) {
            uniqueElements.push(arr[i]);
        }
    }

    return uniqueElements;
}

console.log(remElem(str));


// Efficent Way
const rem_elem = arr => {
    return [...new Set(arr)];
}

console.log(rem_elem(str));