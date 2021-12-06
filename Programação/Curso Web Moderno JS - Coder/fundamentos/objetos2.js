console.log("Com objetos: ");
console.log(typeof Object);
console.log(typeof new Object); // estanciando uma função 
console.log(typeof new Object()); // posso passar com os parênteses ou omitir.

console.log("Com função: ");
const cliente = function() {};
console.log(typeof cliente);
console.log(typeof new cliente);

console.log("Com class: ");
class produto {}; // ES 2015 (ES6)
console.log(typeof produto);
console.log(typeof new produto);
console.log(typeof new produto());