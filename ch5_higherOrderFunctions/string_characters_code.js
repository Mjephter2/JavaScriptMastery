// two emoji characters, horse and shoe
let horseShoe = "🐴🥾";
console.log(horseShoe); // -> 🐴🥾
console.log(horseShoe.length); // -> 4
console.log(horseShoe[0]); // -> �
console.log(horseShoe.charCodeAt(0)); // -> 55357
// actual code for horse emoji
console.log(horseShoe.codePointAt(0)); // -> 128052

// we can loop over each emoji
for( let char of horseShoe){
    console.log(char);
}
/* ->
🐴
🥾
*/