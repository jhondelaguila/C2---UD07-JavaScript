// 31. Realiza un programa que solicite al usuario ingresar un número y luego muestre en la
// consola todos los números primos desde 1 hasta ese número utilizando un bucle `for`, una
// condición `if` y una función auxiliar para verificar si un número es primo.

let number = NaN;
while (isNaN(number)) number = Number(prompt('Ingresa un número'));

const isPrime = (num) => {
    let divisors_counter = 0;

    for (let index = 1; index <= num; index++) {
        if(num % index == 0) divisors_counter++;
    }

    return divisors_counter > 2 ? false : true;
}

for (let i = 1; i <= number; i++) {
    if(isPrime(i)) console.log(i);
}