let ages = new Map();
ages.set("Julia", 35);
ages.set("Mark", 22);
console.log("Julia is", ages.get("Julia"), "years old."); // -> Julia is 35 years old
console.log("Is Mark's age known? :", ages.get("Mark") ? `Yes! It is ${ages.get("Mark")}.` : "No! Sorry!");