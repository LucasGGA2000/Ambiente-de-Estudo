// Armazenando uma função em uma variável

// função anonima
const imprimirSoma = function(a, b) {
    return a + b
};

console.log(imprimirSoma(2, 3));

// Armazenando uma função arrow em uma variável

const soma = (a, b) => {
    console.log(a + b)
};

soma(5, 4);

// return de forma implícita
// Utilizando arrow function

const subtracao = (a, b) => a - b; // Quando não tem a chave de bloco, é uma função de sentença única
console.log(subtracao(2, 3));

// Quando se tem um parametro não precisar envolver os parenteses ()

const imprimir2 = a => console.log(a);
imprimir2('Legal!!');