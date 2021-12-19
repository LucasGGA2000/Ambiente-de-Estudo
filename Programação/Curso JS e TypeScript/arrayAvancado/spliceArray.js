let nomes = ['Lucas', 'Gabriel', 'Gaiao', 'Amaral'];

// nomes.splice(índice atual, delete, elem1, elem2, elem3);

// let removidos = nomes.splice(0, Number.MAX_VALUE);
let removido = nomes.splice(2, 1, 'Teste');
console.log(nomes, removido);