// A variável em JS é içada, jogada pra cima. Quando definida com VAR
// O içamento não ocorre com o let

console.log('a =', a);
var a = 2;
console.log('a =', a);

// Basicamente esse seria o resultado a cima:

console.log('Resultado igual o de cima');
var a;
console.log('a =', a);
a = 2;
console.log('a =', a);

// Dentro da função ela também sofre o içamento

function teste() {
    console.log('Dentro da função!!')
    console.log('a =', a);
    var a = 2;
    console.log('a =', a);
}


// Variáveis declaradas dentro de função, não estará acessível fora dela.

teste();
// console.log(a); // Error

