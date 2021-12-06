// Obs: estrutura de controle que tiver uma unica sentença pode omitir as chaves de blocos

const imprimirResultado = function(nota) {
    if(nota >= 7) {
        console.log('Aprovado!');
    } else {
        console.log('Reprovado!');
    }
}

imprimirResultado(10);
imprimirResultado(4);
imprimirResultado('Epa!'); // tenha um cuidado maior quando se codificar em linguagem fracamente tipada, pós não apresentar erros explicidamente