const pessoas = {
    nome: 'Lucas',
    sobrenome: 'Gabriel',
    idade: 21,
    lagradouro: {
        rua: 'Rua Jose Lacerda Silva Filho',
        numero: 333
    }
};

// Atribuição via desestruturação
const { nome, sobrenome, idade, lagradouro} = pessoas;
console.log(nome, sobrenome, idade, lagradouro);