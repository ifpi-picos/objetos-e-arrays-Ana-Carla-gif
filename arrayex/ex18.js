//Crie um array de objetos representando carros, cada um com propriedades nome e ano, e use filter para criar um novo array contendo apenas os carros fabricados após o ano 2010.

const carros = [
    {
       nome:"Corolla",
        ano:2025,
    },{
        nome:"Touro",
        ano:2005,

    },{

        nome:"Fusca",
        ano:1999,
    },{
        nome:"Honda sivic",
        ano:2017
    }
]
const carrosAtuais=carros.filter(carro=>carro.ano>2010);

console.log(carrosAtuais);