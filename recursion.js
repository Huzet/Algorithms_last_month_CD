// 1. Recursive Sigma
// Write a recursive function that given a number returns the sum of integers from 1 to that number.
// Example: rSigma(5) = 15 (1+2+3+4+5); rSigma(2.5) = 3 (1+2); rSigma(-1) = 0.

// Without Recursion
function Sigma(x){
    sum = 0
    for(var i=0; i<=x; i++){
        sum = sum + i
    }
    return sum
}

// With Recursion
function rSigma(num) {
    if(num > 0) {
        return rSigma(num-1) + num;
    }
    return 0
}

// Recursive Factorial
// Given num, return the product of ints from 1 up to num. If less than zero, treat as zero. If not an integer, truncate. Experts tell us 0! is 1. rFact(3) = 6 (1*2*3). Also, rFact(6.5) = 720 (1*2*3*4*5*6).

// Without Recursion

function Fact(x){
    product = 1
    for(var i=1; i<=x; i++){
        product = product * i
    }
    return product
}

// With Recursion

function rFact(num) {
    if(num > 1) {
        return rSigma(num-1) * num;
    }
    return 0
}

console.log(Fact(3))