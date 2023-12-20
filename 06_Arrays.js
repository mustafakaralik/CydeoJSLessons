// there is no Collection in JS .in JS we have only Araays and Map
// therea are two important Brckets in JS 
//  []  ---->  creates an array
//  {} -----> creates an objects
let scores = new Array(); // creates an empty Array
let numbers = new  Array(10);  // creates an Array with size 10 
let emptyArray = [];     // creates an empty Array too
let myNumbers = new Array(1,23,6,7,10);
let colors = ['Red', 'green', 'yellow'] ;
console.log(scores);
console.log(numbers);
console.log(emptyArray);
console.log(myNumbers);
console.log(colors);


// get second value of colors array
console.log(colors [1]);

// add element to the end of Array
colors.push('white');
colors.push(5);
console.log(colors);

// how to add element to the beginning of Array
colors.unshift('orange');
console.log(colors);

// loops with Arrays
console.log('=========FOR LOOP WİTH aRRAYS ============');
for (let index = 0; index < colors.length; index++) {
    const element = colors[index];
    console.log(element);
}


//for of loop
console.log('=========FOR OF LOOP WİTH aRRAYS ============');
for (const value of colors) {
    console.log(value);
}


console.log('=========FOR each  LOOP WİTH aRRAYS ============');
colors.forEach(element =>{
    console.log(element);
})

// can we add multiple type ofData inside our Array ?  Answer is YES
let soupOfData = [5 , 'cydeo', true, undefined, colors]
soupOfData.forEach(element => {
    console.log(typeof element);
})