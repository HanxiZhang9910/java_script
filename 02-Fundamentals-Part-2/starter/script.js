'use strict'; //activate strict mode to make the code safer

/*
//strict mode will give us a stack trace which helps us locates the bug
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive');

// it will also 
// const private = 3;

//fucntion

function logger() {
    console.log("my name is hanxi");
}

logger();
logger();

logger();


function fruit(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges}  oranges`;
    return juice;
}

console.log(fruit(2, 3));

// function declaration
function calcAge1(birthYear) {
    return 2021 - birthYear;
}

const age1 = calcAge1(1991);

// function expression
const calcAge2 = function (birthYear) {
    return 2021 - birthYear;
}

//call it in the exact same way
const age2 = calcAge2(1990);
console.log(age2);

// arrow function
const calcAge3 = birthYear => 2021 - birthYear; //the difference will be automatically returned
const age3 = calcAge3(1992);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2021 - birthYear;
    const retire = 65 - age;
    return `${firstName} retires in ${retire} years`;
}

console.log(yearsUntilRetirement(1991, "James"));



// array
const f1 = "M";
const f2 = "S";
const f3 = "P";

const fs = ["M", "S", "P"];
console.log(fs);

// another way of declaraing an array
const years = new Array(1, 2, 3, 4);
console.log(fs[0]);

console.log(fs.length);
//change an element
fs[2] = "asd";
console.log(fs);

// we cannot do : totally changes 
// fs = ["s", "d"]

const firstName = "s";
//an array can store different types of data
const jonas = [firstName, fs, 3];
console.log(jonas);

//array operators
fs.push("sd"); // push will add the element to the end of the array
console.log(fs); //

// add element to the beginning of the method
fs.unshift("djd");
console.log(fs);
console.log(fs); //

// remove the last element
const popped = fs.pop(); // we can store the removed element
console.log(fs); //

// remove the first element
const first = fs.shift();
console.log(fs);

// get the index
console.log(fs.indexOf("S")); //

// check if the elements in the ds or not, just like contains
console.log(fs.includes("S")); //


// object
const j = {
    firstName: "Hanxi",
    lastName: "Zhang",
    age: 21,
    job: "student",
    friend: ["A", "B", "C"]
};

console.log(j);
console.log(j.lastName);// access a property of an object
console.log(j["lastName"]); // another way of accessing an element

const nameKey = "Name";
console.log(j['first' + nameKey]); // in the [], two strings will combine
console.log(j['last' + nameKey]);

const interest = prompt("What do you want to know about Jonas? Choose between first name,...");
console.log(j[interest]);

j.location = "Portugal";
j["twitter"] = "dd";
console.log(j);

*/
// have functions as properties

const j = {
    firstName: "Hanxi",
    lastName: "Zhang",
    age: 21,
    birthYear: 1999,
    job: "student",
    friend: ["A", "B", "C"],
    // put the function name in front as the variable name
    // calcAge: function (birthYear) {
    //     return 2021 - birthYear;
    // }

    //better way to write the function
    calcAge: function () {
        return 2021 - this.birthYear;
    },

    getSummary: function () {
        return `${this.firstName}`
    }
};

// call the function in the object
console.log(j.calcAge(1999));
console.log(j["calcAge"](1999));

// for loop
for (let i = 1; i <= 10; i++) {
    console.log(`hello ${i}`);

}

// while loop
let j = 10;
while (j >= 0) {
    j--;
}
