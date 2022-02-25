console.log('\nTrabalhando com listas\n');

// Criando array
const listaDeDestinos = new Array(
    'Salvador', 
    'São Paulo',
    'Rio de Janeiro'
)

const idadeComprador = 18;
const acompanhado = false;
let pagamento = false;
const destino = 'São Paulo';

console.log('Destinos disponíveis: \n', listaDeDestinos, '\n');


const compraAprovacao = idadeComprador >= 18 || acompanhado == true;
    let contador = 0;
    let destinoExiste = false;

    while (contador < 3) {
        if (listaDeDestinos[contador] == destino) {
            destinoExiste = true;
            break;
        }
        contador += 1;
    }

console.log("Destino existe: ", destinoExiste);

if (compraAprovacao && destinoExiste ) {
    console.log ("Embarque aprovado");
} else {
    console.log ("Embarque negado");
}

for (let cont = 0; cont <3; cont++) {
    if (listaDeDestinos[contador] == destino) {
        destinoExiste = true;
    }
}