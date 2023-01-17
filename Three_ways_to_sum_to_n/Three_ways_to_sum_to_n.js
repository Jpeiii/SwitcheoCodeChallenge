// iterate from 1...n and add the value
var sum_to_n_a = function(n) {
    let summation=0;
    for(let i=0;i<=n;i++){
        summation+=i
    }
    return summation
};

// recursive
var sum_to_n_b = function(n) {
    if (n<=1){
        return n
    }else{
        return n+sum_to_n_b(n-1)
    }
};

// using mathematical formula to  calculate the sum
var sum_to_n_c = function(n) {
    return (n/2)*(2*1 + (n-1)*1)
};

console.log(sum_to_n_a(5))
console.log(sum_to_n_b(5))
console.log(sum_to_n_c(5))