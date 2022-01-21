
// ======= IMPLEMENTATION #1 =======
function addUpTo1(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}

let time1 = Date.now();
console.log('Option I', addUpTo1(1000000000));
let time2 = Date.now();
console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds.`); // Time Elapsed: 2.257 seconds.

// ======= IMPLEMENTATION #2 =======
function addUpTo2(n) {
    return n * (n + 1) / 2;
}

let time3 = Date.now();
console.log('Option II', addUpTo2(1000000000));
let time4 = Date.now();
console.log(`Time Elapsed: ${(time4 - time3) / 1000} seconds.`); // Time Elapsed: 0.001 seconds.
