let num1 = 1;
let num2 = 2;

// Prefixada - Prefix
// Tem uma precedencia maior

--num1;
console.log(num2);

// Posfixada - Profix

num1++; // acrescenta uma unidade do valor da variável
console.log(num1);

// Entre os operando - Infix

console.log(num1 + num2);


// Verdadeiro ou falso?

console.log(++num1 === num2--);
console.log(num1 === num2);