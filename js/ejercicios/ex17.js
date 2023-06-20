// 17. Crea un programa que solicite al usuario ingresar un número y muestre en la consola todos
// los números pares desde 2 hasta ese número utilizando un bucle `while`.

let number = NaN;
while(isNaN(number)) number = Number(prompt('Ingresa un número'));

let i = 0;

while (i <= number) {
    if(i % 2 == 0) console.log(i);
    i++;
}