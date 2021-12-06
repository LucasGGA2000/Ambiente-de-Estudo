// Função sem retorno

function imprimirSoma(a, b) {
    console.log(a + b)
};

imprimirSoma(2, 3);
imprimirSoma(2); // Pode-se passar valores únicos para função, cuidado!! valor inteiro + undefined = NaN
imprimirSoma(2, 3, 4, 5, 6); // ira ignorar o restante dos valores informados.
imprimirSoma();

// Função com retorno

function soma(a, b = 5) {
    return a + b
}; // Passando um valor padrão, quando não for passado na chamada da função.

console.log(soma(5));