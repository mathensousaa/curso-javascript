console.log('Trabalhando com listas');

idadeComprador = 18;
acompanhado = false;
pagamento = true;

// Criando array
const listaDeDestinos = new Array(
    'Salvador', 
    'São Paulo',
    'Rio de Janeiro'
)


if (idadeComprador >= 18 || acompanhado == true ) {
    console.log("Compra aprovada.");
    // Deletando item da lista (lembrando que em arrays a contagem de indices se inicia no 0)
    var remover = listaDeDestinos.splice(1,1);
    console.log("Item Comprado: ", remover);
}else {
    console.log("Comprador menor de idade sem acompanhante, compra negada");
}

if ((idadeComprador >= 18 || acompanhado == true) && pagamento == true) {
    console.log("Pagamentos aprovado");
} else {
    console.log("Pagamento nao aprovado");
}
