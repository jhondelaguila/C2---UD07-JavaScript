// 25. Escribe un programa que solicite al usuario ingresar una frase y muestre en la consola cada palabra de la frase en una línea diferente utilizando un bucle `for...of`.

let word = prompt('Escribe algo');

for (const letter of word) {
    console.log(letter);
}