// no access modifier needed, no method overloading 

// create the function 
function add(a,b) {   // parameters of function
    console.log('Total is : '+ (a+b));  // NO return type functions
}

// use the function -- call the function ?-- argument we are passing
add(10,20);
//------------------------------------------------------------//

//return type functions
function multiply(a,b) {
    return (a*b);
}
console.log('the result of multiplication is : '+ multiply(10,20));

/*
they call functions as first class citizens of JS 
you can do with using functions following
1.you can  pass a function as an arguments to other functions
2. you can return function from a function
3. you can store a function into a variable
*/
let divide = function(a,b){
    return a/b;
}

// no overloading 
add(10,20,30,500);  // ignors after the second parametes (we dont have functions which have three parameters)

//renaming the function
console.log(divide(30,5));

let anyName = divide;  // since both are an object
console.log(anyName(30,5));  


// 1.you can  pass a function as an arguments to other functions
function avarage(a,b,fn) {
    return fn(a,b)/2;
}
function sum(a,b) {
        return(a+b);
    }

 let averageOfTotal = avarage(10,20,sum); //sum function here used as an argument inside a function like avarage seems here
 console.log(averageOfTotal);

 let averageOfMultiply = avarage(10,20, multiply);
 console.log("average result from multiplication: "+averageOfMultiply);

 


