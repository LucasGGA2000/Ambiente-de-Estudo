let seuVotoPara = document.querySelector('.d-1-1 span');
let cargo = document.querySelector('.d-1-2 span');
let descricao = document.querySelector('.d-1-4');
let aviso = document.querySelector('.d-2');
let lateral = document.querySelector('.d1-right');
let numeros = document.querySelector('.d-1-3');

let etapaAtual = 0;
let numero = '';

function comecarEtapa() {
    let etapa = etapas[etapaAtual];
    let numerosHtml = '';

    for (let i = 0; i < etapa.numeros; i++) {
        if (i === 0) {
            numerosHtml += '<div class="numero pisca"></div>';
        } else {
            numerosHtml += '<div class="numero"></div>';
        }

        seuVotoPara.style.display = 'none';
        cargo.innerHTML = etapa.titulo;
        descricao.innerHTML = '';
        aviso.style.display = 'none';
        lateral.innerHTML = ''
        numeros.innerHTML = numerosHtml;
    }
}

function clicou(n) {
    let elNumero = document.querySelector('.numero.pisca');
    if(elNumero !== null) {
        elNumero.innerHTMl = n;
        numero = `${numero}${n}`;
    }
}

function branco() {
    alert('Clicou em BRANCO!');
}

function corrige() {
    alert('Clicou em CORRIGE!');
}

function confirma() {
    alert('Clicou em CONFIRMA!');
}

function atualizarInterface() {}

comecarEtapa()