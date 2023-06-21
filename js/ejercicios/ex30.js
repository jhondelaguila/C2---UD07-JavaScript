// 30. Crea un programa que solicite al usuario ingresar un número y luego determine si es un
// número perfecto (la suma de sus divisores propios es igual al número) utilizando un bucle
// `while`, una condición `if` y una variable acumuladora.

let number = NaN;
while (isNaN(number)) number = Number(prompt('Ingresa un número'));

let i = 0, sum = 0;

while (i < number) {
    if (number % i == 0) sum += i;
    i++;
}

if (sum == number) console.log('Es un número perfecto');
else console.log('No es un número perfecto');