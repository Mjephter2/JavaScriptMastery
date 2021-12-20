class Rabbit {
    constructor(type){
        this.type = type;
    }
    speak(line) {
        console.log(`The ${this.type} rabbit says ${line}`);
    }
}

let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbit("black");

// overriding derived property
Rabbit.prototype.teeth = "small";
console.log(killerRabbit.teeth); // -> small
killerRabbit.teeth = "long, sharp and bloody";
console.log(killerRabbit.teeth); // -> long, sharp and bloody
console.log(blackRabbit.teeth); // -> small
console.log(Rabbit.prototype.teeth); // -> small

// check if an object has a particular property outside of the prototype
console.log({x: 1}.hasOwnProperty("x")); // -> true
console.log({x: 1}.hasOwnProperty("y")); // -> false

// polymorphism
Rabbit.prototype.toString = function(){
    return `a ${this.type} rabbit`;
}
console.log(blackRabbit.toString()); // -> a black rabbit

// symbols
let sym = "name";
console.log(sym == Symbol("name")); // -> false
Rabbit.prototype[sym] = 55;
console.log(blackRabbit[sym]); // -> 55

// getters, setters and statics
// getters and setters are defined by placing 'get' or 'set' in front of the method name
class Temperature {
    constructor(celcius){
        this.celcius = celcius;
    }
    get fahrenheit() {
        return this.celcius * 1.8 + 32;
    }

    set farenheit(value){
        this.celcius = (value - 32) / 1.8;
    }

    static fromFarenheit(value){
        return new Temperature((value - 32) / 1.8);
    }
}

let temp = new Temperature(22);
console.log(temp.fahrenheit); // -> 71.6
temp.farenheit = 86;
console.log(temp.celcius); // -> 30

// instanceOf operator
// it is useful to know whether an object was derived from a specific class
console.log(temp instanceof Temperature); // -> true
console.log(blackRabbit instanceof Temperature); // -> false
console.log([2] instanceof Array); // -> true