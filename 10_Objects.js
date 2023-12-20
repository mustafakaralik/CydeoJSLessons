let person = {
    firstName : 'Mustafa', 
    lastName : 'KARA'
}
console.log(person);
console.log(person.firstName);
person.age = 25;  // add a new property with dot notation
console.log(person);

// can we delete property  answer is yes?
delete person.lastName;
console.log(person);

let address ={
    'building no ': 181,
    street: 'argıncık',
    state : 'Kocasinan'
}
console.log(address);
console.log(address['building no ']);

console.log('street' in address); //check if a property exist

let course ={  // we can put arrays , objects or functions inside an object  --> course here is an object
    courseName : 'JS',
    url:'www.cydeo.com',
    subjects: ['Objects', 'Arrays','Functions']
} 

for (const key in course) {
        console.log(key + ' : ' + course[key]);
    }

    // we will put an object which is named "engine" in an object whic is named "myCar"
let myCar = {
    make : 'Dodge', 
    year : 2020,
    engine: {
       cylinder : 4,
       size:2.4 
    },
     // we will put an array which is named "extras" in another object which is named "myCar"
    extras : ['AC', 'Cruise Control', 'Sound System'],
    drive : function() {     // we will put a function  which is named "function" in an object which is named "myCar"
        console.log('Running on GAS');
    }
}

myCar.drive();  // Running on GAS
myCar.extras[1]; // cruise control which is second element of my array (extras)
console.log(myCar.extras[1]);