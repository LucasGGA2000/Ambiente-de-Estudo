// arguments que sustenta todos os argumentos envidados
// arguments só funciona para palavra function, arrow function NÃO
// function expression tambem funcionar a palavrinha reservada arguments


// Passando param e palavrinha reservada arguments, para exibir no console os três param e fazer a soma de todos eles com o arguments. 

function global() {
    function funcao(a, b, c) {
        let total = 0;
        for (let argumento of arguments) {
            total += argumento;
        };
        console.log(total, a, b, c);
    }

    funcao(5, 10, 20, 5);


    // 1 forma - Definindo valor padrão a um param(variavel)

    function funcao1(a, b) {
        a = a || 0;
        b = b || 0;
        console.log(a + b);
    }

    funcao1(2);

    // 2 forma

    function funcao2(a = 0, b = 0) {
        console.log(a + b);
    }

    funcao2(3);

    // 3 forma 

    function funcao3(a, b) {
        if (a === NaN) {
            a = 0;
        }
        if (b != NaN) {
            b = 2;
        }
        console.log(a + b);
    }

    // undefined faz com que o valor "padrão" seja ASSUMIDO.    
    funcao3(4, undefined);


    // Atribuição DESTRITURAÇÃO OBJETO

    function funcao5({ nome, sobrenome, idade }) {
        console.log(nome, sobrenome, idade);
    }

    funcao5({ nome: 'Luiz', sobrenome: 'Otávio', idade: 20 })

    // ATRIBUIÇÃO DESTRITURAÇÃO ARRAY

    function funcao6([valor1, valor2, valor3]) {
        console.log(valor1, valor2, valor3);
    }

    funcao6(['Lucas', 'Gabriel', 'Amaral']);
}

// Usando o rest operator (...)

function conta(operador, acumulador, ...numeros) {
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '*') acumulador *= numero;
        if (operador === '/') acumulador /= numero;
    }
    console.log(acumulador);
}

conta('/', 1, 20, 30, 40, 50);