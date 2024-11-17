/*
Write a JavaScript function to check whether a string is blank or not. 
Test Data :
console.log(is_Blank(''));
console.log(is_Blank('abc'));
true
false
Click me to see the solution
*/

function is_Blank (str) {
    return typeof str === 'string' && str.trim().length === 0;
}

    

console.log(is_Blank(''));
console.log(is_Blank('abc'));


