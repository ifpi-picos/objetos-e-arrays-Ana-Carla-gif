///Crie uma função que recebe um nome completo do usuário e imprime somente o primeiro nome.
function PrimeiroNome(){

    const NomeInteiro=prompt("Digite seu nome completo:");

const nomes= NomeInteiro.split(' ');

const primeiroNome=nomes[0]

console.log("Seu primeiro nome é:",primeiroNome)
}
PrimeiroNome();