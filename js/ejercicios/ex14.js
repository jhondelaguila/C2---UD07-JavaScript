// 14. Crea un programa que solicite al usuario ingresar un número del 1 al 12 y muestre en la
// consola el nombre del mes correspondiente (por ejemplo, 1 corresponde a "Enero", 2
// corresponde a "Febrero", etc.).

let mes = prompt('Ingresa el mes del año como número. Ejemplo: 3 = Marzo');

switch (mes) {
    case '1': console.log('1 Corresponde a Enero'); break;
    case '2': console.log('2 Corresponde a Febrero');break;
    case '3': console.log('3 Corresponde a Marzo');break;
    case '4': console.log('4 Corresponde a Abril');break;
    case '5': console.log('5 Corresponde a Mayo');break;
    case '6': console.log('6 Corresponde a Junio');break;
    case '7': console.log('7 Corresponde a Julio');break;
    case '8': console.log('8 Corresponde a Agosto'); break;
    case '9': console.log('9 Corresponde a Septiembre');break;
    case '10': console.log('10 Corresponde a Octubre');break;
    case '11': console.log('11 Corresponde a Noviembre');break;
    case '12': console.log('12 Corresponde a Diciembre');break;
    default: console.log('Ese valor no corresponde a ningun mes del año. Ejemplo: 6 = Junio'); break;
}