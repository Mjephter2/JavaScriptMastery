class Vec {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    plus(otherVec){
        return new Vec(this.x + otherVec.x, this.y + otherVec.y);
    }
    minus(otherVec){
        return new Vec(this.x - otherVec.x, this.y - otherVec.y);
    }
    get length(){
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
}

let vector1 = new Vec(1, 4);
let vector2 = new Vec(3, 4);
let vector3 = new Vec(1, 4);

let vector4 = vector1.plus(vector2);
let vector5 = vector4.minus(vector3);

console.log(vector5.length); // -> 5