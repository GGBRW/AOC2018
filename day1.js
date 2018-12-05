const input = require('fs').readFileSync('input.txt').toString().split("\n").map(n => +n);

// Part 1
console.log(input.reduce((a,b) => a + b));


// Part 2
const occ = {};
let sum = 0;
while(true) {
    for(let i of input) {
        sum += i;
        if(occ[sum]) return console.log(sum);
        occ[sum] = true;
    }
}

// const occ = {};
// input.reduce((a,b) => { occ[a] = true; if(occ[a]) { console.log(a) || process.exit(); } return a + b; });
