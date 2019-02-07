// Container is Broken


function printInFrame(list) {

 //Take out the spaces in the given string
 var list = list.split(' ');

 //Get a variable from a function below
 var longest = longestStr(list).length;

 // Border Time
 var border = repeat('*', longest + 4);

 console.log(border);

 for (word of list) {
   console.log('* ' + word + repeat(' ', longest - word.length + 1) + '*');
 }
 console.log(border);
}

function repeat(str, times) {
 var result = str;

 for (var i = 0; i < times; i++) {
   result += str;
 }

 return result;
}

/// Function for finding longest String
function longestStr(list) {
 var longest = list[0];
 // No Logic in terms of comparing the lengths
 for (str of list) {
   if (str.length > longest.length){
     longest = str;
   }

 }
 return longest;
}
       // Function longestStr is now returning the correct value.

// Test driver code, do not modify
printInFrame('May the force be with you');
printInFrame('Here\'s Johnny!');
printInFrame('Supercalifragalisticexpialadocious');
printInFrame('Lost, like tears in the rain');