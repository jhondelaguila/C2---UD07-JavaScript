// 11. Crea un programa que solicite al usuario ingresar un número y determine si es divisible
// entre 3

let number = NaN;

while (isNaN(number)) number = Number(prompt('Ingresa un número'));

if (number % 3 == 0) console.log('Es divisible entre 3');
else console.log('No es divisible entre 3');