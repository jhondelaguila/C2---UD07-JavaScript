// 29. Escribe un programa que solicite al usuario ingresar una palabra y luego cuente y muestre
// en la consola la cantidad de vocales que tiene la palabra utilizando un bucle `for`, una
// condición `if` y una variable contador.

let palabra = prompt('Escribe algo');

let counter = 0;

for (let index = 0; index < palabra.length; index++) {
    if (palabra[index] == 'a' || palabra[index] == 'e' || palabra[index] == 'i' || palabra[index] == 'o' || palabra[index] == 'u' ||
        palabra[index] == 'A' || palabra[index] == 'E' || palabra[index] == 'I' || palabra[index] == 'O' || palabra[index] == 'U') {
        counter++;
    }
}

console.log(counter);