// 13. Realiza un programa que solicite al usuario ingresar dos números y determine si son iguales
// o diferentes.

let a = NaN;
while (isNaN(a)) a = Number(prompt('Ingresa un número para el valor A'));

let b = NaN;
while (isNaN(b)) b = Number(prompt('Ingresa un número para el valor B'));

if (a===b) console.log('Son iguales');
else console.log('Son diferentes');