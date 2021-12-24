/**
 * code sample from 'Eloquent Javascript' by Marijn Haverbeke
 *      3rd Edition
 *      page 196-197
 */
// we use 'require' to load modules
// when you define a function with function*, it becomes a generator.
// When called, a generator returns and iterator

function* powers(n){
    for(let current = 1;; current *= n){
        yield current;
    }
}

for(let power of powers(3)){
    if(power > 50) break;
    console.log(power);
}
/* -> 
3
9
27
*/

// writing iterators is often much easier when you use generator functions
// There's no longer a need to create an object to hold the iteration state