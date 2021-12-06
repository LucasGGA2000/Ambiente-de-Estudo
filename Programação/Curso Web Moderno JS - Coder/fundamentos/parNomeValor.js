// par nome / valor
// contexto léxico é o local físico no código onde a variável foi declarada.

const saudacao = 'Opa'; // contexto léxico 1

function exe() {
    const saudacao = 'Falaa'; // contexto léxico 2
    return saudacao
}

// Objetos são grupos aninhados de pares chave/valor

const cliente = {
    nome: 'Lucas',
    idade: 32, 
    peso: 90, 
    teste: 'teste',
    endereco: {
        logradouro: 'Rua jose',
        numero: 123,
        teste: 'teste'
        // Posso utilizar as mesma chaves do contexto acima, pós são contextos léxicos diferentes.
        // Um é contexto do objeto cliente e outro do endereco
    }
}

console.log(saudacao);
console.log(exe());
console.log(cliente);