// 7. Escribe un programa que pida al usuario ingresar su edad y verifique si es mayor de edad
// (18 años o más).

let edad = NaN;

while (isNaN(edad)) edad = Number(prompt('Ingresa tu edad'));

if (edad >= 18) console.log('Eres mayor de edad');
else console.log('Eres menor de edad');