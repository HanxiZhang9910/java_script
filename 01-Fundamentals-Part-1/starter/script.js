// let js = "amazing";
// console.log(40 + 8 + 23 - 30);

// console.log("Jonas");
// console.log(23);

// let firstName = "jonads";
// let PI = 3.1415; // make a constant, the editor will automatically change the color
// // console.log(firstName); //whenever we need to output somthing to the console
// true;
// console.log(true);
// //every time when we try to declare a new variable,
// //we use the word let
// let java = true;

//when we reassign it, we don't have to use let
// java = "hello";

// //type of operator
// console.log(typeof true);

// //undefined data type
// let year;
// console.log(year);
// console.log(typeof year);

// //three different ways to declare a variable
// //1. let
// //use it for changes later
// let y = 1;
// y = 2;

// //2. const
// //use it when we want the value to be changed
// // they are immutable, so we cannot declare empty variables with const
// const birthYear = 1999;

// //3. var DO NOT USE THIS, BUT FOR READING OLD FILES
// //the old way of decalration, same as let
// var job = 'programmer';
// job = "teahcehr";

// //A bad way
// lastName = 'zhang';
// console.log(lastName);


// Math Operators
// const now = 2021;
// const age = now - 1999;
// const ageR = now - 2001;
// console.log(age, ageR); // we can use console to display multiple variables

// console.log(age * 2, age / 10, 2 ** 3);


// const first = "hanxi";
// const last = "zhang";
// console.log(first + " " + last);

// let x = 10 + 5;
// x += 10;


// // comparison operators
// console.log(age < ageR); // >, <, >=, <=,
// console.log(age <= 10);


// const markHeight = 1.69;
// const markWeight = 78;

// const johnHeight = 1.95;
// const johnWeight = 92;

// const johnBMI = johnWeight / johnHeight ** 2;
// const markBMI = markWeight / markHeight ** 2;

// let markHigherBMI = markBMI > johnBMI;

// console.log(markHigherBMI);

// // Template Literals

// const firstName = "hanxi";
// const year = 2021;
// const birthYear = 1999;
// const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old teacher!`;
// console.log(jonasNew);

// //we can also use `` for any regular string
// console.log(`just a regular string`);

// //new line
// console.log(`String with \n\ multiple \n\ lines`);

// // new way of creating new line
// console.log(`string
// multiple
// lines`)

// const age = 10;
// const isOldEnough = age >= 18;

// if (isOldEnough) {
//     console.log("Sarah can start driving now");
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Sarah is too young, Wait another ${yearsLeft} years :)`);
// }


// let century;
// const birthYear = 1991;
// if (birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }

//type convertion: manually convert
const inputYear = '1999';
console.log(Number(inputYear) + 18); // convert to Number type
console.log(String(23));

//type coersion: aumatically convert
console.log('I am ' + 23 + ' years old');
console.log('23' - '10'); // minus sign will trigger type coersion

// only plus sign will not work because it will create a new string.

//falsy values
//there are only 5 falsy values
//0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(""))


// equity operators
const age = 18;
if (age === 18) console.log("You just became an adult :)");

// === is the strict equal operator
// == is the loose equal operator, it can perform type coersion. 
console.log('18' == 18);

const favorite = prompt("What is your favorite number?");
console.log(favorite);
console.log(typeof favorite);

if (favorite !== 23) {
    console.log("why not 23?");
}

//switch 

const day = "monday";
switch (day) {
    case "monday":
        console.log("plan course structure");
        console.log("go to coding meet up");
        break;
    case "tuesday":
        console.log("dd");
        break;
    default:
        console.log("hello world")
}