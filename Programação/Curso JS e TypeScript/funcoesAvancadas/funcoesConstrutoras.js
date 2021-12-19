// Função construtoras retorna OBJETOS
// Função fabricas também retorna OBJETOS
// Função construtura tem que começar com new e var com letra maisculas

function Pessoa(nome, sobrenome) {

    // Atributos privados
    const ID = 123;
    const metodoInterno = () => {};

    this.nome = nome;
    this.sobrenome = sobrenome;
}

const p1 = new Pessoa('Lucas', 'Gabriel');
const p2 = new Pessoa('Maria', 'Fernanda');