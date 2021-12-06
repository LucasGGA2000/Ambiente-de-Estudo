let valor; // não inicializada
console.log(valor);
//console.log(valor2); // error: variável não foi declarada

valor = null; // Não está apontando para nenhum endereço na memória e tem ausência de valor.
console.log(valor);
// console.log(valor.toString); //Error

// Obs: Para zerar uma variável referencia use sempre NULL ou ZERO, undefined deixa que a linguagem defini quando ela entender que o valor não foi definido

const produto = {};
console.log(produto.preco); // Produto está definido, porém o preço não = undefined
//console.log(produto.preco.a); // Porém se adicionar algo a pós, dará erro
console.log(produto);

produto.preco = 3.50;
console.log(produto);

produto.preco = undefined; // Evite atribuir de forma explicita o undefined
console.log(!!produto.preco);
delete produto.preco;
console.log(produto);