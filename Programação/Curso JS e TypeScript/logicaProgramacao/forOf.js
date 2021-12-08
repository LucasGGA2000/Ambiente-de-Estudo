// For Clássico - Geralmente com interáveis (arrays ou strings)
// For In - Retorna o índice ou chave (string, array ou objetos)
// For of - Retorna o valor em si (iteráveis, arrays ou strings)

const nome = 'Luiz Otávio';

// for (let i = 0; i < nome.length; i++) {
//     console.log(nome[i]);
// }

for(let valor of nome) {
    console.log(valor);
}
