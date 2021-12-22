// assertions are checks within a program to ensure errors are caught as early as possible

/**
 * code sample from 'Eloquent Javascript' by Marijn Haverbeke
 *      3rd Edition
 *      page 140-141
 */

// this method returns the first item in an array

// instead of letting the program return undefined when the input array is empty
//      an exception is thrown, possibly preventing a snow ball effect.
function firstElement(array){
    if(array.length == 0){
        throw new Error("firstElement called with []");
    }
    return array[0];
}