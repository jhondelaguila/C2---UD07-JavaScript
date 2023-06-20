// 8. Crea un programa que pida al usuario ingresar tres números y determine cuál es el mayor
// de ellos.

let numberA = NaN;
while(isNaN(numberA)) numberA = Number(prompt('Ingresa el valor del número A'));
let numberB = NaN;
while(isNaN(numberB)) numberB = Number(prompt('Ingresa el valor del número B'));
let numberC = NaN;
while(isNaN(numberC)) numberC = Number(prompt('Ingresa el valor del número C'));

let greatestNumber = numberA;

if (numberB > greatestNumber && numberB > numberC) greatestNumber = numberB;
else if (numberC > greatestNumber && numberC > numberB) greatestNumber = numberC;

console.log('El número mas grande es el '+greatestNumber);
