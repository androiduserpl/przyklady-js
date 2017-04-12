'use strict';
var arena = "Akademia108";
function reverseString(arena) {
    // Step 1. Use the split() method to return a new array
    var splitString = arena.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]
 
    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]
 
    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"
    
    //Step 4. Return the reversed string
    return joinArray; // "olleh"
    console.log(joinArray);
}
 
reverseString(arena);
console.log(reverseString(arena));
/////




function reverseString2(arena) {
    return arena.split("").reverse().join("");
}
reverseString2("hello");
console.log(reverseString2(arena));


















/*
var akademia = "Akademia108!";

function akademiaReverse() {
    akademia.value;
    var reversed = '';
    
    for (var i = akademia.length - 1; i >= 0; i--) {
        reversed += akademia[i];
    }

}

akademiaReverse();
console.log(akademiaReverse);
*/

