//Crie um array de objetos representando pessoas com nome e idade, e use find para encontrar a primeira pessoa com idade maior que 18.
const Humanos=[{
    nome:"Ana Carla",
    idade:18,
},
{
    nome:"Álex",
    idade:17
},
{
    nome:"Amanda",
    idade:21
}
]
const pessoaMaioridade=Humanos.find(Humanos=>Humanos.idade>18);
console.log(pessoaMaioridade);
