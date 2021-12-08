const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros) {
    if (numero === 2 || numero === 5) {
        console.log('Pulei o numero 2 e 5');
        continue;
    }

    // ou

    if (numero === 7) {
        console.log('Pulei o numero 7');
        continue;
    }

    if (numero === 4) {
        console.log('4 encontrado.. saindo');
        break; 
    }
}