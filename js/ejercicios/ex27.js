// 27. Crea un programa que solicite al usuario ingresar un número y luego calcule la suma de
// todos los números impares desde 1 hasta ese número utilizando un bucle `while` y una
// condición `if

let number = NaN;

while(isNaN(number)) number = Number(prompt('Ingresa un número'));

let i = 0,sum = 0;

while(i <= number){
    if(i % 2 == 1) sum += i;
    i++;
}

console.log(sum);