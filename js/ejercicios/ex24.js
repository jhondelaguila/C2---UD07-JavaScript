// 24. Realiza un programa que solicite al usuario ingresar un número y muestre en la consola la
// suma de todos los dígitos del número utilizando un bucle `while`.
let number = null;
let correct_value = false;
let i = 0;
do {
    number = prompt('Ingresa un numero');
    while (i < number.length){
        if(!isNaN(Number(number[i]))) {
            correct_value = true; 
            i++;
        }
        else {
            correct_value = false; 
            console.log('El valor no es correcto'); 
            break;
        }
    }
    i = 0;
} while (correct_value == false);

let sum = 0;
while (i < number.length){
    sum += Number(number[i]);
    i++;
}

console.log(sum);