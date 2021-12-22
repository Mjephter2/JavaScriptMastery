class MultiplicatorUnitFailure extends Error{}

const primitiveMultiply = () => {
    let good = false;
    for(;;){
        let n1 = Number(prompt("Enter first number: "));
        let n2 = Number(prompt("Enter second number: "));
        try{
            if(!isNaN(n1) && !isNaN(n2)){
                good = true;
                return `${n1} x ${n2} = ${n1 * n2}`;
            }else{
                throw new MultiplicatorUnitFailure("invalid input supplied")
            }
        }catch(e){
            console.log(e);
        }finally{
            if(!good){
                console.log("let's try again");
            }
        }
    }
}

console.log(primitiveMultiply());