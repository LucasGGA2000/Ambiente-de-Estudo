// let tem escopo de bloco {bloco}
// var só tem escopo de função

const verdadeiro = true;
let nome = 'luiz';
var nome2 = 'Junior'

if(verdadeiro) {
    let nome = 'Maria';
    // var nome2 = 'Anderson';
    console.log(nome, nome2);
}
