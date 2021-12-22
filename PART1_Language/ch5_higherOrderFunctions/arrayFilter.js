// create another array consisting only of values >=3 from the array 1, 2, 3, 4, 5]
console.log([1, 2, 3, 4, 5].filter(num => num >= 3)); // -> [ 3, 4, 5 ]
// test whether an array has a value that satisfies some condition
console.log([1, 2, 3, 4].some(value => value % 2 == 0)); // true