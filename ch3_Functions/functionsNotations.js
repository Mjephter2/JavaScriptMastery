// Declarative Notation
function square(x){
    return x * x;
}
console.log("The square of 5 is", square(5));

// Arrow Functions
const power = (base, exponent) => {
    let result = 1;
    for(let i = 0; i < exponent; i++){
        result *= base;
    }
    return result;
};
console.log("The cube of 5 is", power(5, 3)); // The cube of 5 is 125
// other examples
const square1 = x => {return x * x};
const square2 = x => x * x;
// square1 and square2 do the same action

// optional parameters
function minus(a, b){
    return a - b;
}
console.log(minus(5)); // NaN
// minus expect 2 arguments, the missing argument b is treated as undefined

// default parameters
function minusDefault(a, b = 0){
    return a - b;
}
console.log(minusDefault(5)); // 25

// closure : a function that references bindings from local scopes around it
function multiplier(factor){
    return number => number * factor;
}

let twice = multiplier(2);
console.log(twice(5)); // 10

// recursion
function powerRecursion(base, exponent){
    if(exponent == 0){
        return 1;
    }else{
        return base * powerRecursion(base, exponent - 1);
    }
}
console.log(powerRecursion(10, 3)); // 1000