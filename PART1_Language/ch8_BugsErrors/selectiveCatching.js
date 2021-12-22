// JavaScript does not provide the exact exception thrown unless we specify what to catch

/**
 * code sample from 'Eloquent Javascript' by Marijn Haverbeke
 *      3rd Edition
 *      page 138-140
 */

class InputError extends Error {}

function promptDirection(question){
    let result = prompt(question);
    if(result.toLowerCase() == "left") return "L";
    if(result.toLowerCase() == "right") return "R";
    throw new InputError("Invalid Direction: " + result);
}

for(;;){
    try{
        let dir = promptDirection("Where?");
        console.log("You chose ", dir);
        break;
    }catch(e){
        if(e instanceof InputError){
            console.log("Not a valid direction. Try again.");
        }else{
            throw e;
        }
    }
}