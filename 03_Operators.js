//JS supports all kind of operations, order of operations is same with Java
console.log(4+4*-1 - 8 / 2);  // -4

// 8 is divided by 2 = 4, 4 and -1 is mulitplied = -4, (4 + -4 -4)= -4

//prefix
let a = 5;

console.log(++a); //6

//postfix
let b = 5;

console.log(b++); //5
console.log(b);  //6

// assignment operatorss
b += a;  // b = b + a;
console.log(b);

//Comparison OPerators
let one = 1;
let one_again = 1;

let one_string='1';
let two_string= '2';

console.log(one == one_again); //true
console.log(one == one_string); //true: bcz == sign is lookimg for value equality data type is not imprtant for ==
console.log(one === one_string); //false because dta types are different === loking for value and data type as well
console.log(one === one_again); // true because data type also the same
console.log(one_string === two_string); // false bcz data types are same but values are different

// logical Operators are same like JAVA you have only short circuit
let num1 = 5;
let num2 = 10;
let num3 = 15;
let result = num1 < num2 &&  num1 < num3; // true && true = true
console.log('=======logical Operators======');
console.log(result);
result = num1 > num2 && num1 < num3;
console.log(result);
result = num1 > num2 || num1 < num3;
console.log(result); // false || true = true

