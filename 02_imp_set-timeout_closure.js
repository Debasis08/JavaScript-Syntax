

// 01
// this will come out first then the number will be printed

function x() {
    var i = 1;
     setTimeout(function () {
        console.log(i);
     }, 3000);
     console.log("Hey Man...")
}

x();