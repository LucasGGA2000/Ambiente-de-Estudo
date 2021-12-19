// Filter -> Sempre retorna um array, com mesma quantidade ou menos de elementos
// Filter não modifica os valores do array, apenas FILTRA
// Filter retorna verdadeiro ou falso
// Filter(valores, indice, array)
 

// Retorne os números maiores que 10



// function maiorQ() {
//     const numeros = [5, 50, 80, 1, 2, 3, 5, 20, 48, 192, 25, 10];
//     for (let numerosN of numeros) {
//         if (numerosN >= 10) {
//             const maiorN = numerosN;
//             console.log(`Os numeros maiores que DEZ SÃO: ${maiorN}`);
//         }
//     }
// }

// maiorQ()


const numeros = [5, 50, 80, 1, 2, 3, 5, 20, 48, 192, 25, 10];

// function callbackFilter(valor) {
//     return valor > 10; 
// }

// const numerosFiltrados = numeros.filter(valor => valor > 10);
const numerosFiltrados = numeros.filter(valor => valor > 10);
// console.log(numerosFiltrados);


// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo o nome termina com a

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47}
];

const quantLetrasFilter = pessoas.filter(valor => valor.nome.length >= 5);
const idadeFilter = pessoas.filter(valor => valor.idade > 50);
const letrasFilter = pessoas.filter(valor => valor.nome.toLocaleLowerCase().endsWith('a'));

console.log(quantLetrasFilter);
console.log(idadeFilter);
console.log(letrasFilter);