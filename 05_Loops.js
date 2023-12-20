//for loop, while  loop and do while loop
for (let index = 0; index <= 5; index++) { // let create local scope variable
console.log(index);
    
}
// console.log(index);

// old type of declaring variables in JS: before ES6  : side topic  it is not main topic 
console.log('==========for loop with var declaring =========');
for(var j = 0; j< 5 ; j++){  // all implementation in {} curly  braces --> starting point, condition , increment  -->global and function scope of variable İNTERVİEW QUES
    console.log(j);
}
console.log(j); // var ile değer atadığımızda  ecmascript6 den önce let yerine var kullanımı geçerli idi 2015 ten sonra var let oldu

//while loops
console.log('========While loops ========');
let i = 0;   // starting point 
while (i < 3) {    // condition 
    console.log(i);
    i++;   // increment
}

let z = 0;
console.log('============do while loop ===========');    //difference between while and do while loop condition check after execuitons in do while loop IONTERVİEW QUES
do {
    console.log(z);
    z++;
} while (z < 3); // condition check after execution