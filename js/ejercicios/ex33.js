// 33. Crea un programa que solicite al usuario ingresar una palabra y luego muestre en la
// consola la palabra invertida utilizando un bucle `while`, una condición `if` y una variable
// acumuladora.

let word = prompt('Escribe algo');

let counter = 0;

let reversed_word = [];

while (counter < word.length){
    reversed_word.push(word[word.length-counter-1]);
    counter++;
    if(counter == word.length) console.log(reversed_word.join(""));;
}