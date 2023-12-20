let x = function(a){
    return 5*a;
}

// concise way of creating function
let y = a => 5*a;
console.log(y(5));

let arr = [10,20,30];
// map functions
let newArr = arr.map(each => each*2);
console.log( newArr);

//varArgs in JS
function howmanyElements(...theArgs) {
    console.log(theArgs.length);
    
}

howmanyElements();
howmanyElements(5);
howmanyElements(3,4,5,6,7,8);

function multiply(multiplier,...theArgs) {
    return theArgs.map(element => multiplier * element)
}

console.log(multiply(5,1,2,3,4,5));

let str ='MUSTAFA';
let chars = [...str];
console.log(chars);  //['M', 'U', 'S'...]