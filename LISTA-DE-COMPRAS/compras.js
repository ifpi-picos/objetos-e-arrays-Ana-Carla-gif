let ListaCompra =[];
function AdicionarItem(){
  const item =prompt("Digite o item:");
  ListaCompra.push(item);
  console.log(`${item} adicionado a lista`)
}
function RemoverItem(){
  const item = prompt("Digite o item que você deseja retirar:");
  const index = ListaCompra.indexOf(item);
  if(index !== -1){
    ListaCompra.splice(index, 1);
    console.log(`${item} removido da lista`);
  }
else {
  console.log("Item não encontrado na lista!")
}
}
function PesquisarItem(){
  const item = prompt("Digite o nome do item que deseja pesquisar:");

  if(ListaCompra.includes(item)){

    console.log(`${item} Esse item está na lista`);
  } 
  
  else{
    console.log(`${item}Esse item não foi encontrado na lista!`);
  } 
  }



function OrdenarLista(){ 
  ListaCompra.sort();
  console.log("A lista está ordenada em ordem alfabética!");
}
function ExibirLista(){
  if(ListaCompra.length === 0){
    console.log("Sua lista está vazia!");
  }
  else {
    console.log("Lista de Compras:");
    ListaCompra.forEach((item, index ) => {
      console.log(`${index + 1}. ${item}`);
    });

  }
}
function LimparLista(){
  ListaCompra = [];
  console.log("Lista de compras limpa!");
}

while (true){
  
  console.log("\n Regerenciador de Lista de compras  ");
  console.log("1.Adiconar Item ");
  console.log("2.Remover Item");                      
  console.log("3.Pesquisar Item");
  console.log("4.Ordenar Lista");
  console.log("5.Exibir Lista");
  console.log("6.Limpar lista");
  console.log("0.sair");
  const opcoes = parseInt(prompt("Escolha uma opção:"));


  switch(opcoes){
    case 1 :
      AdicionarItem();
      break;
      case 2 :
        RemoverItem();
        break;
    case 3 :
      PesquisarItem();
      break;
      case 4:
        OrdenarLista();
        break;
        case 5 :
          ExibirLista();
          break;
          case 6 :
            LimparLista();
            case 0:
              console.log("Encerramento do programa...");
            process.exit();
            default:
              console.log("Opção inválida!")
  }
}

