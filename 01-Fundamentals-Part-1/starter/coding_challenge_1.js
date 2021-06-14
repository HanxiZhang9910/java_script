const markHeight = 1.69;
const markWeight = 78;

const johnHeight = 1.95;
const johnWeight = 92;

const johnBMI = johnWeight / johnHeight ** 2;
const markBMI = markWeight / markHeight ** 2;

let markHigherBMI = markBMI > johnBMI;

console.log(markHigherBMI);

const firstName = "hanxi";
const year = 2021;
const birthYear = 1999;
const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old teacher!`;
console.log(jonasNew);