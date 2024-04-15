
// Here, Output is "10"

function a() {
    console.log(b);
}

const b = 10;
a();


// Here, Output is "y is not defined"

function x() {
    const y = 10;
}

console.log(y);
x();
