//Escreva um programa em JavaScript que utilize a biblioteca convert para converter dias em minutos e gigabytes em bytes.

// Importa a biblioteca 'convert'
import convert from 'convert'

// Função para converter dias em minutos

function diasEmMinutos(dias) {
  return convert(dias, "days").to('minutes');
}

// Função para converter gigabytes em bytes
function gigabytesemBytes(gigabytes) {
  return convert(gigabytes, "gibibytes").to('bytes');
}

// Teste 
const dias = Number(5);
const gigabytes = Number(2);

console.log(`${dias} dias são em ${diasEmMinutos(dias)} minutos.`);
console.log(`${gigabytes} gigabytes são em ${gigabytesemBytes(gigabytes)} bytes.`);


