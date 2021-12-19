// Factory Function (Função fábrica)

function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },

        // Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
            console.log(valor);
        },

        fala: function (assunto) {
            return `${nome} está ${assunto}.`
        },
        altura: altura,
        peso: peso,
        // Getter - para obter o valor do metodo como atributo
        get imc() {
            const calcularIMC = this.peso / (this.altura ** 2);
            return calcularIMC.toFixed(2);
        }
    }

}


const p1 = criaPessoa('Luiz', 'Otávio', 1.6, 52);
// console.log(p1.nome);
// console.log(p1.sobrenome);
// console.log(p1.fala('falando sobre JS'));
// console.log(p1.imc);

p1.nomeCompleto = 'Lucas Gabriel Amaral';
console.log(p1.nome);
console.log(p1.sobrenome);