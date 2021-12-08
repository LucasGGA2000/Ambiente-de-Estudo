// Escreva uma função que recebe um número e
// Retorne o seguinte:
// Numero é divisível por 3 = Fizz
// Numero é divisível por 5 = Buzz
// Numero é divisível por 3 e 5 = FizzBuzz
// Numero NÃO é divisível por 3 e 5 = Retorna o próprio número
// Checar se o número é realmente um número
// Use a função com número de 0 a 100 = OK

const numRandom = (min, max) => {
    let r = Math.random() * (max - min) + min;

    return Math.floor(r);
}

let num = numRandom(1, 100);

const eDivisivel = (num) => {
    if (typeof num !== 'number') return NaN;
    if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz';
    if (num % 3 === 0) return 'Fizz';
    if (num % 5 === 0) return 'Buzz';
    return num
}

console.log(eDivisivel(num));