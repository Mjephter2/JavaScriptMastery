const isEven = x => {
    if(x < 0){
        return isEven(-x);
    }else if(x == 0){
        return true;
    }else if(x == 1){
        return false;
    }else{
        return isEven(x - 2);
    }
}
console.log(isEven(4)); // true
console.log(isEven(5)); // false
console.log(isEven(-1)); // false
console.log(isEven(-10)); // true
console.log(isEven(90001)); // RangeError: Maximum call stack size exceeded