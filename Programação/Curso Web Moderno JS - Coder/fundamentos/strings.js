// Para definição de string em um dado, utiliza-se aspas simples, aspas duplas ou crases = ( " String ", ' String ', ` String ` )
// O uso da crase é para template string

const escola = "Cod3r";

console.log(escola.charAt(4)); // a letra que esta no índice 4 - Inicializando por zero
console.log(escola.charAt(5));

console.log(escola.charCodeAt(3)); // Pegar o valor na tabela ASK ou Unicode

console.log(escola.indexOf('3')); // Qual índice está o caractere informado

console.log(escola.substring(1)); // A partir do índice 1 mostrar o restante 
console.log(escola.substring(0, 3)); // índice 0 até 3 sem incluir o índice 3

console.log('Escola'.concat(escola).concat('!')); // Concatenação
console.log('Escola' + escola + '!'); // Concatenação


console.log(escola.replace(3, 'e')); // o replace substitui os caracteres
console.log(escola.replace(/\w/g, 'e')); // o replace substitui os caracteres - /\d/ = uma expressão regular, basicamente informando para substituir todos os texto pela letra E

console.log('Ana, Maria, Pedro'.split(',')) // Converter strings para arrays, informando qual será o separador