// novo recurso do ES2015
// destructuring é uma forma simplificada de tirar de dentro de uma estrutura os atributos
// tirando da estrutura e atribuindo como variáveis

const [a] = [10];
console.log(a);

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8];
console.log(n1, n3, n5, n6);

const [, [, nota]] = [[, 8, 8], [9, 6, 8]];
console.log(nota);