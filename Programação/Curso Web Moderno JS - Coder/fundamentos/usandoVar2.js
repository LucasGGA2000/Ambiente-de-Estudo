// A declaração com VAR não existe escopo de bloco, só existe dentro de função e global

var numero = 1;
{
    var numero = 2;
    console.log('Dentro =', numero);
}

console.log('Fora =', numero);

// Let tem declaração diferente dentro de escopos.

let numero1 = 3;

{
    let numero1 = 5;
    console.log('Dentro =', numero1);
}

console.log('Fora = ', numero1);