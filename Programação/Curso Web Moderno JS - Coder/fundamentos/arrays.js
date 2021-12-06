//Arrays == Dinamico, indexada, hetogenio (não é boa pratica)

const valores = [7.7, 1.4, 6.3, 5.2];
console.log(valores);
console.log(valores[0], valores[3]);
console.log(valores[4]);

valores[4] = 5;

console.log(valores);
console.log(valores.length); // para ver a quantidade dos arrays

console.log(valores.push('teste', null, undefined, true, {id: 3})); // para adicionar um elemento no array - arry é hetorogenio (aceita multiplos valores = JS tipagem fraca) - Não recomendado
console.log(valores)

console.log(valores.pop()); // tira o ultimo elemento de um array 
delete valores[0]; // retirar elemento no indice informado
console.log(valores);

console.log(typeof valores);