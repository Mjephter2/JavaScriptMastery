const values = [1, 2, 3, 4];
const reverseArray = (array) => {
    let result = [];
    for( let i of array){
        result.unshift(i);
    }
    return result;
}
console.log(reverseArray(values)); // [ 4, 3, 2, 1 ]

const reverseArrayInPlace = (array) => {
    for(let i = 0; i < array.length / 2; i++){
        let temp = Number(array[i]);
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = temp;
    }
}
reverseArrayInPlace(values);
console.log(values);