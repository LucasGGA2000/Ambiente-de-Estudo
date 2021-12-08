const h1 = document.querySelector('#container h1');
const data = new Date();
const opcoes = {
    dateStyle: 'full',
    timesStyle: 'short'
};

h1.innerHTML = data.toLocaleDateString('pt-BR', opcoes);