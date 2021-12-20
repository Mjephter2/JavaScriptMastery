const range = (start, end) => {
    let result = [];
    for(let i = start; i <= end; i++){
        result.push(i);
    }
    return result;
}
console.log(range(1, 10)); 
/* -> 
[
 1, 2, 3, 4,  5,
 6, 7, 8, 9, 10
]
*/

const sum = (values) => {
    let result = 0;
    for( let i of values){
        result += i;
    }
    return result;
}
console.log(sum(range(1, 10))); // 55

const rangeMod = (start, end, step = 1) => {
    if(step == 0 || (start - end < 0 && step < 0) || (start - end > 0 && step > 0)){
        return [];
    }
    let result = [];
    if(step < 0){
        for( let i = start ; i >= end; i += step){
            result.push(i);
        }
    }else{
        for( let i = start ; i <= end; i += step){
            result.push(i);
        }
    }
    return result;
}
console.log(rangeMod(1, 10, 2)); // -> [ 1, 3, 5, 7, 9 ]
console.log(rangeMod(5, 2, -1)); // -> [ 5, 4, 3, 2 ]