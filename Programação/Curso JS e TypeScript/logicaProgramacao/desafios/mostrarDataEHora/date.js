function formatarDataAtual() {
    const data = new Date();
    const dia = data.getDate();
    const mes = data.getMonth();
    const ano = data.getFullYear();
    let diaTxt;
    let mesTxt;

    switch (dia) {
        case 0:
            diaTxt = 'Domingo'
            break
        case 1:
            diaTxt = 'Segunda-feira'
            break
        case 2:
            diaTxt = 'Terça-feira'
            break
        case 3:
            diaTxt = 'Quarta-feira'
            break
        case 4:
            diaTxt = 'Quinta-feira'
            break
        case 5:
            diaTxt = 'Sexta-feira'
            break
        case 6:
            diaTxt = 'Sabado'
            break
        default:
            diaTxt = ''
    }


    switch (mes) {
        case 0:
            mesTxt = 'Janeiro';
            break;
        case 1:
            mesTxt = 'Fevereiro';
            break;
        case 2:
            mesTxt = 'Março';
            break;
        case 3:
            mesTxt = 'Abril';
            break;
        case 4:
            mesTxt = 'Maio';
            break;
        case 5:
            mesTxt = 'Junho';
            break;
        case 6:
            mesTxt = 'Julho';
            break;
        case 7:
            mesTxt = 'Agosto';
            break;
        case 8:
            mesTxt = 'Setembro';
            break;
        case 9:
            mesTxt = 'Outubro';
            break;
        case 10:
            mesTxt = 'Novembro';
            break;
        case 11:
            mesTxt = 'Dezembro';
            break;
    }

    const dataAtual = `${diaTxt}, ${dia} de ${mesTxt} de ${ano}`;
    return dataAtual
}

function formatarHoraAtual() {
    const data = new Date('2020-01-01 20:00');
    const horas = data.getHours();
    const minutos = data.getMinutes();

    const formatarMinutos = minutos <= 10 ? `0${minutos}` : `${minutos}` 

    const horaAtual = `${horas}:${formatarMinutos}`
    return horaAtual;   
}

function criarElemento() {
    const elemento = document.createElement('h1');
    return elemento;
}

function mostrarDataEHora(){
    const mostrarDataEHora = `${formatarDataAtual()} ${formatarHoraAtual()}`
    return mostrarDataEHora
}

function exibir() {
    const elemento = criarElemento();
    let captarContainer = document.querySelector('#container');
    captarContainer.appendChild(elemento);
    elemento.innerHTML = `${mostrarDataEHora()}`
}

exibir()