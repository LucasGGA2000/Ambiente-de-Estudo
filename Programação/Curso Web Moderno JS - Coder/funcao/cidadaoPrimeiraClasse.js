// Função em JS é First-Class Object (Citizens)
// High-order function

// Criar de forma literal 

function fun1() {};

// Armazenar em variável

const fun2 = function() {}; // Função anonima atribuida a uma const

// Armazenar em um array

const array = [function (a, b) { return a + b }, fun1, fun2];
console.log(array[0](2, 3)); // Pegando array no indice 0 passando 2 e 3 como paramentros

// Armazenar em um atributo de objeto

const obj = {};
obj.falar = function(){ return 'Opa' }
console.log(obj.falar());

// Passar uma função como param

function run(fun) {
    fun()
}

run(function () {console.log('Executando..')});

// Um função pode retornar/conter um função
    function soma(a, b) {
        return function (c) {
            console.log(a + b + c)
        }
    }

    soma(2, 3)(4)