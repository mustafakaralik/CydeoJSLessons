let str1 = 'Java';
let str2 = "Script";
let str3 = "awesome";

let result;

result = "the result variable is: "+ str1+str2+ ' ' + str3; // Like Java

console.log(result);

// difference from JAva : backticks for variable insertion
result =  `the result variable is: ${str1}${str2} ${str3}`;  // backticks allows insert variables inside our  string
console.log(result);

result =  "the result variable is: ${str1}${str2} ${str3}";
console.log(result);