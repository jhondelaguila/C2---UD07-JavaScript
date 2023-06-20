// 10. Realiza un programa que solicite al usuario ingresar el día de la semana (como número del
//     1 al 7) y muestre en la consola el nombre del día correspondiente (por ejemplo, 1
//     corresponde a "Lunes", 2 corresponde a "Martes", etc.).

let dia = prompt('Ingresa el día de la semana como número. Ejemplo: 3 = Miércoles');

switch (dia) {
    case '1': console.log('1 Corresponde a Lunes'); break;
    case '2': console.log('2 Corresponde a Martes');break;
    case '3': console.log('3 Corresponde a Miércoles');break;
    case '4': console.log('4 Corresponde a Jueves');break;
    case '5': console.log('5 Corresponde a Viernes');break;
    case '6': console.log('6 Corresponde a Sábado');break;
    case '7': console.log('7 Corresponde a Domingo');break;
    default: console.log('Ese valor no corresponde a ningun día de la semana. Ejemplo: 6 = Sábado'); break;
}