//reduce(acumulador, valorAtual, indice, arrayOriginal)

const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 8, 11, 15, 22, 27];
// const total = numeros.reduce(function(acumulador, valor, indice, array){}, 0); // com valor 0 inicial do acumulador
const total = numeros.reduce(function(acumulador, valor) {
    if(valor % 2 == 0) // acumulador.push(valor);
    // acumulador.push(valor * 2);
    acumulador += valor;
    return acumulador;
});

// console.log(total)


// Retorne a pessoa mais velha

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 10},
    {nome: 'Rosana', idade: 64},
    {nome: 'Wallace', idade: 63}
];


const maisVelha = pessoas.reduce(function(acumulador, valor) {
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});


console.log(maisVelha)
