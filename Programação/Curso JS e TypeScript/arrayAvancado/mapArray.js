// Com o Map recebemos um valor copia do array original
// Map é passado por referencia, o valor original é modificado
// Map sempre vai ter o mesmo tamanho do array original
// Map retorna o valores diferentes
// Map(valores, indice, array)


// Dobre os números

const numeros = [5, 50, 80, 1, 2, 3, 5, 20, 48, 192, 25, 10];

const numerosEmDobro = numeros.map(valor => valor * 2);

// console.log(numerosEmDobro);


// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47}
];

const nomeString = pessoas.map(valor => valor.nome);
// const idades = pessoas.map(valor => valor.idade);
const idades = pessoas.map(valor => ({idade: valor.idade}));
// const idades = pessoas.map(valor => {
//     delete valor.nome;
//     return valor;
// });
const id = pessoas.map(function(valor, indice) {
    const newObj = {...valor};
    newObj.id = indice + 1;
    return newObj;
})


console.log(nomeString);
console.log(idades);
console.log(id);

// console.log(pessoas);