const prod1 = {};
// Em java script pode criar um objeto e definir atributos e comportamos dinamicamente.
// Objeto é uma coleção de chave (ID) e valor - nome: 'Celular Ultra Mega'
// É possível ter objetos outros tipos de objetos internos.
prod1.nome = 'Celular Ultra Mega';
prod1.preco = 4998.90;
prod1['Produtos em Estoque'] = 2; // Utiliza-se cochetes [] para definir chaves(ID) com espaços - Evitar atributos com espaços. 

console.log(prod1);

// Outra forma de criar objeto, utilizando anotação literal. Criando chave e valor dentro da própria declaração do objeto, separado por virgulas.
// Essa anotação literal é totalmente diferente de json.

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    tamanho: 'M',
    comprimento: {
        braco: 142,
        perna: 34,
        comprimento: {
            braco: 141,
            perna: 35
        } // Posso utilizar a mesma chave(ID) porém em escopo diferente.
        // Posso utilizar funções dentro de um objeto.
    }
}; 

console.log(prod2);