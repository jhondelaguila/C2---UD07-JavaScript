// 28. Realiza un programa que solicite al usuario ingresar un número y luego muestre en la
// consola si ese número es primo o no utilizando un bucle `for`, una condición `if` y un
// contador de divisores.

let number = NaN;

while(isNaN(number)) number = Number(prompt('Ingresa un número'));

let divisors_counter = 0;

for (let index = 1; index <= number; index++) {
    if(number % index == 0) divisors_counter++;
}

if (divisors_counter > 2) console.log('No es número primo');
else console.log('Es número primo');