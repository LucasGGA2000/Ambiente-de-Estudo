// funções construtoras inicializar com a letra maiúscula.
// funções construtoras começa com o new.

// const tresHoras = 60 * 60 * 3 * 1000;
// const umDia = 60 * 60 * 24 * 1000;
// const data = new Date(0 + tresHoras + umDia); // 01/01/1970 Timestamp unix ou época unix
// console.log(data.toString());

// const data = new Date(2020, 0, 10, 00, 00);
// const data = new Date('2019-01-10 00:00:00');
// console.log('Dia', data.getDate());
// console.log('Mês', data.getMonth() + 1);
// console.log('Ano', data.getFullYear());
// console.log('Hora', data.getHours());
// console.log('Min', data.getMinutes());
// console.log('Seg', data.getSeconds());
// console.log('ms', data.getMilliseconds());
// console.log('Dia semana', data.getDay());
// console.log(data.toString());

function zeroAEsquerda(num) {
    // if(num >= 10) {
    //     return num;
    // } else {
    //     return `0${num}`;
    // }

    return num >= 10 ? num : `0${num}`;
}

function formatarData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth());
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data = new Date();
const dataBrasil = formatarData(data);

console.log(dataBrasil);