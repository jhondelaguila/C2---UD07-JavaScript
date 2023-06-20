// 22. Escribe un programa que solicite al usuario ingresar una palabra y muestre en la consola
// cada letra de la palabra en una línea diferente utilizando un bucle `for`.

let palabra = prompt('Escribe algo');

for (let index = 0; index < palabra.length; index++) {
    console.log(palabra[index]);
}