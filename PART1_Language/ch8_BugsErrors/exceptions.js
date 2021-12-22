// user may not provide desirable inputs
// we must therefore deal with those inputs by using exceptions
/**
 * code sample from 'Eloquent Javascript' by Marijn Haverbeke
 *      3rd Edition
 *      page 135-136
 */
function promptDirection(question){
    let result = prompt(question);
    if(result.toLowerCase() == "left") return "L";
    if(result.toLowerCase() == "right") return "R";
    throw new Error("Invalid Direction: " + result);
}

function look(){
    if(promptDirection("Which way?") == "L"){
        return "a house";
    }else{
        return "two angry bears";
    }
}

try{
    console.log("You see", look());
}catch(error){
    console.log("Something went wrong: " + error);
}