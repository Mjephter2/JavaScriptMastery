const deepEqual = (value1, value2) => {
    if(value1 === null || value2 === null){
        return false;
    }
    if (value1 === value2){
        return true;
    }
    if(typeof value1 === "object" && typeof value2 === "object"){
        let value1Keys = Object.keys(value1);
        for(let i of value1Keys){
            if(value1[i] !== value2[i]){
                return false;
            }
        }
        let value2Keys = Object.keys(value2);
        for(let i of value2Keys){
            if(value2[i] !== value1[i]){
                return false;
            }
        }
        return true;
    }
    return false;
}
console.log(deepEqual(1, {})); // -> false
console.log(deepEqual(1, 2)); // -> false
console.log(deepEqual(10, 10)); // -> true
console.log(deepEqual({}, {})); // -> true
console.log(deepEqual({x: 1, y: 2}, {x: 1, y: 1})); // -> false
console.log(deepEqual({x: 1, y: 2}, {x: 1, y: 2})); // -> true
console.log(deepEqual({}, {x: 1, y: 1})); // -> false
console.log(deepEqual({x: 1}, {x: 1, y: 1})); // -> false
console.log(deepEqual({x: 1, y: 2, z: 7}, {x: 1, y: 2})); // -> false
console.log(deepEqual({x: 1, y: 2}, {x: 1, y: 2})); // -> true
console.log(deepEqual(null, {x: 1, y: 2})); // -> false