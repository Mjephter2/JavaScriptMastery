// it can be useful for a function to accept any number of arguments
// ex: Math.max
// To write such function, put three dots before the function's last parameter

const max = (...values) => {
    let result = -Infinity;
    for( let number of values){
        if ( number > result) result = number
    }
    return result;
}
console.log( max( 1, 2, 200, 1, 7 ) ); // -> 200
console.log(max(1, 100)); // -> 100
// can also be used on arrays
let numbers = [ 5, 1, 7 ];
console.log(max(...numbers)); // 7
// can also use array along with other single arguments
console.log(max(...numbers, 10)); // 10