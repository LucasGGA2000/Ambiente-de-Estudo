// Let tem declarações diferentes dentro de escopo.

let numero = 1;

{
    let numero = 2;
    console.log('Dentro =', numero);
}

console.log('Fora =', numero);