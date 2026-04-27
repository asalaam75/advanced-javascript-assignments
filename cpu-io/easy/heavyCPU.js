// Problem Description – Blocking CPU-Intensive Task
//
// You are given a function that performs a large number of calculations
// synchronously using a loop.
//
// Your task is to observe and understand how a CPU-heavy synchronous
// operation blocks the JavaScript event loop, preventing other code
// (such as timers or async callbacks) from running until it completes.


function heavyCPU(iterations) {
    setTimeout(() => {
    console.log("Timer fired");
}, 0);
 let sum = 0;
    console.log(" start");
for (let i = 0; i < iterations; i++) {
    // do something trivial
    sum += i;
}    console.log("end");

return sum;
}

module.exports = heavyCPU;
