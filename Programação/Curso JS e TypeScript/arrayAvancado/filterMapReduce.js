// Retorne a soma do dobro de todos os pares
// -> Filtrar pares
// -> Dobrar os valores
// -> Reduzir (somar tudo)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// const numerosPares = numeros.filter(valor => {
//     // console.log(valor)
//     if(valor % 2 == 0) {
//         let pares = valor;
//         return pares;
//     }
// });

// const dobrarValores = numerosPares.map(valores => {
//     valores *= 2;
//     return valores
// });

// const somaValores = dobrarValores.reduce((acumulador, valores) => {
//     acumulador += valores;
//     return acumulador;
// }, 0);


// console.log(numerosPares);
// console.log(dobrarValores)
// console.log(somaValores);


// const numerosPares = numeros.filter(function (valor) {
//     return valor % 2 === 0
// }).map(function (valor) {
//     return valor * 2;
// }).reduce(function (acumulador, valor) {
//     acumulador += valor;
//     return acumulador
// });

const numerosPares = numeros
    .filter(valor => valor % 2 === 0)
    .map(valor => valor * 2)
    .reduce((acumulador, valor) => acumulador += valor);

console.log(numerosPares);