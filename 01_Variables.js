//single comment line

/**
 * Multi Line Comment line
 */

// Declare a variable  (JS is dynamic typing language means there is no  variables such java int double etc just let and declare variables what you want)
let m;
console.log(typeof m);  //it gives us undefined 
m = 5;                  //JS infers that m is a number
console.log(typeof m);   //it gives us as number 
m = "mustafa";          //JS infers that m is a string
console.log(typeof m);  //it gives us string 
m = true;               //JS infers that m is a boolean
console.log(typeof m);
let message;
// so we can assing a data type of variable dynamically not just we can do in java
// Assign a value
message='Hello Mustafa Again'

console.log(message);

//re assign a new value 
message="My first JS Code"

console.log(message);

//create two variable at the same time
let admin, userName;

userName= "Mustafa";
admin= userName;
console.log(admin);

/**
 * JS is Dynamicly typing language
 */

let a;
console.log(typeof a);  // undefined 
a = 5;  // JS infers taht a is a number
console.log(typeof a); // number

a="MustafaJSKara";
console.log(typeof a); // string

a = true;
console.log(typeof a);

a =null;
console.log(typeof a);

let x = 5, y = 'karalik';
console.log(x+y);  // concatination 5karalik
console.log(x*y);  // NaN nanapplicable

// constant variables 
const b = 45;
//can we reassign a new value to constant number 
b=30;  // we can not reassigned new number for constant variables it gives us extantion error you said b = 45 but than you want to say it is 30 it is impossible
console.log(b); 