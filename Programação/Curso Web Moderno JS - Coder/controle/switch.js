// o switch (caso) não retorna uma expressão relacional (booleana) e sim um valor e pode conter alguns types
// o switch em "JAVASCRIPT" executar o caso da expressão passada e executar os restante a baixo (for fro), o break interfere nesse for fro
const imprimirResultado = function(nota) {
    switch(Math.floor(nota)) {
        case 10: // pode ter dois caso vinculado a mesma sentença
        case 9:
            console.log('Quadro de Honra');
            break; // sair do switch sem executar os restantes caso a expressão do case seja valida.
        case 8: case 7: // pode colocar tanto em linhas diferente como na mesma linha
            console.log('Aprovado!');
            break;
        case 6: case 5: case 4:
            console.log('Recuperação!');
            break;
        case 3: case 2: case 1: case 0:
            console.log('Reprovado!');
            break;
        default: // Se nenhuma expressão foi valida (parecido com o else) e pode está em qualquer posição. Porém caso esteja em outra posição tem que botar o break
            console.log('Nota inválida');
    }
}

imprimirResultado(10);
imprimirResultado(8.9);
imprimirResultado(6.55);
imprimirResultado(2.3);
imprimirResultado(-1);
imprimirResultado(11);