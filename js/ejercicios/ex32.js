// 32. Escribe un programa que solicite al usuario ingresar un número y luego calcule el factorial
// de ese número utilizando un bucle `for`, una condición `if` y una variable acumuladora.

let number = NaN;
while (isNaN(number)) number = Number(prompt('Ingresa un número'));

let factorial = 0;

for (let index = 0; index <= number; index++) {
    if(number == 0 || number == 1 || index < 1) factorial = 1;
    else factorial *= index;
}

console.log(factorial);