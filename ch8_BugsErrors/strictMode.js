/**
 * code sample from 'Eloquent Javascript' by Marijn Haverbeke
 *      3rd Edition
 *      page 131
 */
"use strict";
function Person(name){
    this.name = name;
}
let ferdinand = Person("Ferdinand"); // forgot new
console.log(name); // -> TypeError: Cannot set property 'name' of undefined