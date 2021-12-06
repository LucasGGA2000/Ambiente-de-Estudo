// novo recurso do ES2015
// destructuring é uma forma simplificada de tirar de dentro de uma estrutura os atributos

const pessoa = {
    nome: 'Ana', 
    idade: 5, 
    endereco: {
        logradouro: 'Rua ABC', 
        numero: 1000
    }
}

// Tire de dentro do objeto nome e idade. Qual objeto? = pessoa

const {nome, idade} = pessoa;
console.log(nome, idade);

// definido nomes predefinidos para variáveis do atributo do objeto pessoa

const {nome: n, idade: i} = pessoa;
console.log(n, i);

// atribuindo valor padrão, para não da undefined

const {sobrenome, bemHumorada = true} = pessoa;
console.log(sobrenome, bemHumorada);

// acessar atributos internos de um objeto

const {endereco: {logradouro, numero, cep = 53240040}} = pessoa;
console.log(logradouro, numero, cep); 
