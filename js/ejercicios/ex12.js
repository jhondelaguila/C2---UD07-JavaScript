// 12. Escribe un programa que solicite al usuario ingresar su calificación en un examen y muestre
// en la consola si ha aprobado (calificación mayor o igual a 70) o no.

let nota = NaN;

while (isNaN(nota)) {
    nota = Number(prompt('Ingresa tu nota de examen'));
    if (!(nota >= 0 && nota <= 100)) nota = NaN;
}

if (nota >= 70) console.log('Aprobado :)');
else console.log('Suspendido :(');