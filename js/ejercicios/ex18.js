// 18. Realiza un programa que solicite al usuario ingresar un número y muestre en la consola la
// suma de todos los números naturales hasta ese número utilizando un bucle `do...while`.

let number = NaN;
while(isNaN(number)) number = Number(prompt('Ingresa un número'));

let i = 0, suma = 0;

do {
    suma += i;
    i++;
} while (i <= number);

console.log(suma);