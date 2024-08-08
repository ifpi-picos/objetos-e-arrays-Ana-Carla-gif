//Crie uma função que recebe um nome completo do usuário e imprime o primeiro e último nome.
function Nomeseparar (){
const NomeCompleto=prompt("Digite seu nome completo:")
const nomes= NomeCompleto.split(' ')
const PrimeiroNome =nomes[0]
const UltimoNome=nomes[nomes.length-1];
console.log("Primeiro nome:", PrimeiroNome);
console.log(" Ultimo nome : ", UltimoNome);
}
Nomeseparar();