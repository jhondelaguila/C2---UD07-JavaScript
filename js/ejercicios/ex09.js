// 9. Escribe un programa que solicite al usuario ingresar un número y determine si es positivo,
// negativo o cero.

let number = NaN;

while (isNaN(number)) number = Number(prompt('Ingresa un número'));

if (number > 0) console.log('El número es positivo');
else if (number < 0) console.log('El número es negativo');
else console.log('El número es 0');