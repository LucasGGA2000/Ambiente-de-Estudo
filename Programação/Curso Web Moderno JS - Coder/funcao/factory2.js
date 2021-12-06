function criarProduto(nome, preco, desconto = 10) {
    return {
        nome,
        preco,
        desconto: 10
    }
}

console.log(criarProduto('Notebook', 2199.09))
console.log(criarProduto('Celular', 4299.09))
console.log(criarProduto('Ipad', 199.09))