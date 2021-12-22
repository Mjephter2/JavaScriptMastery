// functions that operate on other functions,
// either by taking them as arguments or by 
// returning them are called higher-order function

function greaterThan(n){
    return m => m > n;
}
let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11)); // -> true
console.log(greaterThan10(9)); // -> false
 
// for loop for higher order functions
["A", "B"].forEach(n => console.log(n));
// -> A
// -> B