// a1.forEach(function(valor, indice, array));

const a1 = [10, 20, 33];

// for(let valor of a1) {
//     console.log(valor);
// }

let total = 0;

a1.forEach(valor => {
    total += valor;
});

console.log(total);