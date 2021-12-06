let dobro = function (a) {
    return 2 * a;
}

// função arrow é sempre uma função anonima

dobro = (a) => {
    return 2 * a;
}

// quando se tem um unico parâmentro, pode tirar os parentes
// quando você tira o corpo da função {}, você tem um retorno implicito, função de unica linha de retorno

dobro = a => 2 * a; // retorno implicito
console.log(dobro(Math.PI));

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' // possui param
console.log(ola())