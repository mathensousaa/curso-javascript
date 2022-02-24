console.log('Trabalhando com listas');


// Criando array
const listaDeDestinos = new Array(
    'Salvador', 
    'São Paulo',
    'Rio de Janeiro'
)

// Outra sintaxe para criação de array 
    // var listaDeDestinos = [
    //     'Salvador',
    //     'São Paulo',
    //     'Rio de Janeiro'
    // ]

//Verificando tamanho do array
var tamanho = listaDeDestinos.length;
console.log("Quantidade de itens: ", tamanho);

 
//Adicionando um item no array
listaDeDestinos.push('Curitiba');
console.log("Item adicionado: ", listaDeDestinos[listaDeDestinos.length - 1]);  
console.log("Lista: ", listaDeDestinos);


// Deletando item da lista (lembrando que em arrays a contagem de indices se inicia no 0)
var remover = listaDeDestinos.splice(1,1);
console.log("Item Removido: ", remover);


// Deletando PRIMEIRO item da lista
var removerPrimeiro = listaDeDestinos.shift();
console.log("Primeiro item removido: ", removerPrimeiro);


// Adicionando item ao inicio da lista
var adicionarPrimeiro = listaDeDestinos.unshift('Natal');
console.log ("Item adicionado:", listaDeDestinos[0]);


// Procurar indice de item
var posicao = listaDeDestinos.indexOf('Natal');
console.log("A posição de ", listaDeDestinos[posicao], "é: ", posicao + 1);


// Acessar item em posição especifica do array
console.log("Itens selecionados: ", listaDeDestinos[2], ", " , listaDeDestinos[1]);


// Acessar último item do array de forma mais intuitiva
console.log("Último item do array: ", listaDeDestinos[listaDeDestinos.length - 1]);


// ver tamanho do array = array.length
// ver posicao de item = array.indexOf()
// ver item de posicao = array[array.length - 1]
// adicionar item ao array = array.push()
// adicionar item ao inicio do array = array.unshift()
// deletando item especifico do array = array.splice(indice do primeiro arrays, quantidades de itens a partir do primeiro para excluir)
// deletar item do inicio do array = array.shift()

