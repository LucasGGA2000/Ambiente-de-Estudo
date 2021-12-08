// ... rest, ... spread

// let a = 'A'; // B
// let b = 'B'; // C
// let c = 'C'; // A

// const letras = [b, c, a];
// [a, b, c] = letras;

// console.log(letras);

// const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
// const [um, dois, tres, quatro, ...restoArray] = numeros;
// console.log(um, dois, tres, quatro);
// console.log(restoArray);

const numeros = [ [55, 34, 22], [12, 33, 52], [11, 22, 66] ];
// console.log(numeros[1][0]);
const [,,[,,seis]] = numeros
const [,,[onze]] = numeros
console.log(seis)
console.log(onze)