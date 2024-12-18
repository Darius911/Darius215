/*
 Write a JavaScript function to convert a string in abbreviated form. 
Test Data :
console.log(abbrev_name("Robin Singh"));
"Robin S."
*/
abbrev_name = function (str1) {
    
    let split_names = str1.trim().split(" ");
    
    if (split_names.length > 1) {
        
        return (split_names[0] + " " + split_names[1].charAt(0) + ".");
    }
    
    return split_names[0];
};

console.log(abbrev_name("Robin Singh"));

