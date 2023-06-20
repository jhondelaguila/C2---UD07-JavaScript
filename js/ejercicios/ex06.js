// 6. Realiza un programa que solicite al usuario ingresar un número y determine si es par o impar

//let number = Number(prompt('Ingresa un número'));

let number = NaN;

while (isNaN(number)) number = Number(prompt('Ingresa un número'));

if (number % 2 === 0) console.log('El número '+number+' es par');
else console.log('El número '+number+' impar');