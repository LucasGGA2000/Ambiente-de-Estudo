// Declaração de função (Function hoisting)

function falaOi() {
    console.log('Oie');
}

// First-class objects (Objetos de primeira classe)
// Function expression

const souUmDado = function() {
    console.log('Sou um dado.');
};

// Objeto de primeira class, quando uma função pode ser passada como um DADO

function executarFuncao(funcao) {
    console.log('Irei executar!');
    souUmDado();
}

executarFuncao();

// Arrow function

const funcaoArrow = () => {
    console.log('Sou uma arrow function')
}

funcaoArrow();

// Dentro de um objeto

const obj = {
    falar: function() {
        console.log('Estou falando...')
    }
}

obj.falar();