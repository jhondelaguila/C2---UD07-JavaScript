// 15. Escribe un programa que pida al usuario ingresar un año y determine si es bisiesto o no (un
//     año es bisiesto si es divisible entre 4, pero no entre 100, a menos que también sea divisible
//     entre 400).

let year = NaN;
while(isNaN(year)) year = Number(prompt('Ingresa un año'));

if ((year % 4 == 0 || year % 400 == 0) && !(year % 100 == 0)) console.log('Es año bisiesto');
else console.log('No es año bisiesto');