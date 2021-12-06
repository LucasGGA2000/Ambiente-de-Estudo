function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

let opcao = -1;

// Obrigatoriamente ele vai executar a primeira repetição e quando ele executar a primeira repetição o valor de opção vai ser trocado pela função, então pode colar -1 em opção.

do {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
} while (opcao != -1)

console.log('Até a próxima!')