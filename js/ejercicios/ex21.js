// 21. Realiza un programa que solicite al usuario ingresar un número y muestre en la consola la
// multiplicación de todos los números enteros positivos menores o iguales a ese número
// utilizando un bucle `do...while`.

let number = NaN;
while (isNaN(number)) number = Number(prompt('Ingresa un número'));

let condition = number;
if (number < 0) condition = number * -1;

let i = 0;

do {
    console.log(`${i}x${condition}=${i*condition}`);
    i++;
} while (i < condition);