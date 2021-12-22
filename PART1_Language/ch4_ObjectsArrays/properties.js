// console.log(null.length); // TypeError: Cannot read property 'length' of null

// 2 main ways to access properties
// value.x
// value[x]
// [x] is more dynamic as x is evaluated

let descriptions = {
    work: "Went to work",
    "touched a tree": "Touched a tree"
};
console.log(descriptions["touched a tree"]); // Touched a tree
console.log(descriptions.work); // Went to work

// delete operator
let anObject = {
    left: 1,
    right: 2
};
console.log(anObject.left); // 1
delete anObject.left;
console.log(anObject.left) // undefined
console.log("left" in anObject); // false
console.log("right" in anObject); // true

// to find out what properties an object has
console.log(Object.keys({x:0, y:0, z:2})); // [ 'x', 'y', 'z' ]

// copy all properties from one object to another
let objectA = {a:1, b:2};
Object.assign(objectA, {b:3, c:4});
console.log(objectA); // { a: 1, b: 3, c: 4 }

// mutability
console.log("** Mutability **");
let object1 = { value: 10};
let object2 = object1;
let object3 = { value: 10};
console.log(object1 == object2); // true
console.log(object1 == object3); // false
object1.value = 15;
console.log(object2.value); // 15
console.log(object3.value); // 10
