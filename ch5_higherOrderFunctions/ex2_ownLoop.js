const loop = (value, test, update, body) => {
    if(test(value)){
        body(value);
        value = update(value, 1);
        loop(value, test, update, body);
    }
}

const testFunction = (maxValue) => {
    return value => value <= maxValue;
}

const updateFunction = (stepValue = 1) => {
    return currentValue =>  currentValue + stepValue;
}

loop(0, 
    testFunction(10), 
    updateFunction(3), 
    (value) => console.log(value)
    );