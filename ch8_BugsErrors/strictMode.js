"use strict";
function Person(name){
    this.name = name;
}
let ferdinand = Person("Ferdinand"); // forgot new
console.log(name); // -> TypeError: Cannot set property 'name' of undefined