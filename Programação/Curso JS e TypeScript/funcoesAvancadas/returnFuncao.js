// Retorna um valor
// Termina a função

// console.log apenas exibi no console, não armazena operação em variaveis.

function soma1(a, b) {
    return a + b;
}

let s1 = soma1(2, 2);
console.log(s1);


function soma2(a, b) {
    console.log(a + b)
}

let s2 = soma2(5, 2);
console.log(s2);



function criaPessoa(nome, sobrenome) {
    return { nome, sobrenome };
}

const p1 = criaPessoa('Luiz', 'Otávio');
const p2 = {
    nome: 'João',
    sobrenome: 'Oliveira'
};

console.log(typeof p1);
console.log(typeof p2);


function criarMultiplicador(multiplicador) {
    // multiplicador
    // function multiplicacao(n) {
    //     return n * multiplicador;
    // } ou
    return function(n) {
        return n * multiplicador;
    }
}

const duplica = criarMultiplicador(2);
const triplica = criarMultiplicador(3);
const quadriplica = criarMultiplicador(4);

console.log(duplica(10));
console.log(triplica(10));
console.log(quadriplica(10));