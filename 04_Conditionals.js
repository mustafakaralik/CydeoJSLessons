//if else statements
let num1 = 100;
let num2 = 10;
let maxNumber;

if (num1 > num2) {
    maxNumber = num1;
    
}else{maxNumber = num2;
}
console.log(maxNumber);

//Ternary operator
maxNumber = num1 < num2 ? num1 : num2;

console.log('===ternary result===')
console.log(maxNumber);

//switch statements in JS
let month = 4;
let dayCount;


switch (month) {
    case 2:
       dayCount = 28; 
        break;
    case 1:
        dayCount = 31;
        break;
    case 4:
        dayCount = 30;
        break;
    default:
        dayCount = -1;
        break;
}
console.log(dayCount);

// ternary operator
let age = 25; 
let isEligible = age > 18 ? true: false;
console.log(isEligible);  // true

let num11 = 10;
let num22 = 20;
let resultsTernary = (num11 > num22 ) ? (num11 + num22)  : (num11 - num22);
console.log(resultsTernary);

//switch case operator
let months = 2;
let dayCounts;
switch (months) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    dayCounts = 31;
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    dayCounts = 30;
    break;
  case 2:
    dayCounts = 28;
    break;
  default:
    dayCounts = -1;
    break;
}
console.log(dayCounts);