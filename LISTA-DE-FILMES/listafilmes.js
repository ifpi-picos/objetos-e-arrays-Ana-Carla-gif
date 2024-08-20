/* DECLARAÇÃO DE VARIÁVEIS*/
const filmesParaAssistir = [];
const filmesAssistidos = []; 

/*FUNÇÕES PARA ADICIONAR,ORDENAR,PESQUISAR,EXIBIR, MARCAR COMO ASSISTIDO, REMOVER FILME E EXECUTAR PROGRAMA*/


function adicionarFilme(titulo, ano) {
    filmesParaAssistir.push({ titulo:titulo, ano:ano });
}

function ordenarListaPorTitulo() {
    filmesParaAssistir.sort((a, b) => a.titulo.localeCompare(b.titulo));
}

function ordenarListaPorAno() {
    filmesParaAssistir.sort((a, b) => a.ano - b.ano);
}

function pesquisarFilme(titulo) {
    return filmesParaAssistir.some(filme => filme.titulo.toLowerCase() === titulo.toLowerCase());
}

function exibirListas() {

    console.log("Filmes para Assistir:");
    filmesParaAssistir.forEach(filme => console.log(`Título: ${filme.titulo}, Ano: ${filme.ano}`));
    
    console.log("\nFilmes Assistidos:");
    filmesAssistidos.forEach(filme => console.log(`Título: ${filme.titulo}, Ano: ${filme.ano}`));
}

function marcarFilmeComoAssistido() {
    if (filmesParaAssistir.length > 0) {
        const filme = filmesParaAssistir.shift();
        filmesAssistidos.push(filme);
        console.log(`Filme marcado como assistido: ${filme.titulo}`);
    } else {
        console.log("Não há filmes para assistir.");
    }
}

function removerFilme(titulo) {
    const index = filmesParaAssistir.findIndex(filme => filme.titulo.toLowerCase() === titulo.toLowerCase());
    if (index !== -1) {
        filmesParaAssistir.splice(index, 1);
        console.log(`Filme removido: ${titulo}`);
    } else {
        console.log("Filme não encontrado.");
    }
}

function exibirMenu() {
    console.log("\nMenu:");
    console.log("1. Adicionar Filme");
    console.log("2. Ordenar Lista por Título");
    console.log("3. Ordenar Lista por Ano");
    console.log("4. Pesquisar Filme");
    console.log("5. Exibir Listas");
    console.log("6. Marcar Filme como Assistido");
    console.log("7. Remover Filme");
    console.log("8. Encerrar Programa");
}

function executarPrograma() {
 
    let i = true
    while(i == true){
        exibirMenu();
        let opcao = Number(prompt('Escolha uma opção: '));
    
    switch (opcao) {
        case 1:
            const titulo = prompt('Digite o título do filme: ').trim();
            const ano = parseInt(prompt('Digite o ano de lançamento do filme: '));
            adicionarFilme(titulo, ano);
            console.log('Filme adicionado.');
            break;
        case 2:
            ordenarListaPorTitulo();
            console.log('Lista ordenada por título.');
            break;
        case 3:
            ordenarListaPorAno();
            console.log('Lista ordenada por ano.');
            break;
        case 4:
            const pesquisarTitulo = prompt('Digite o título do filme para pesquisar: ');
            console.log(pesquisarFilme(pesquisarTitulo) ? 'Filme encontrado.' : 'Filme não encontrado.');
            break;
        case 5:
            exibirListas();
            break;
        case 6:
            marcarFilmeComoAssistido();
            break;
        case 7:
            const removerTitulo = prompt('Digite o título do filme para remover: ').trim();
            removerFilme(removerTitulo);
            break;
        case 8:
            console.log('Programa encerrado.');
            i = false
            break;
        default:

            console.log('Opção inválida, tente novamente.');
            break;

    }
}
}
    

executarPrograma();


