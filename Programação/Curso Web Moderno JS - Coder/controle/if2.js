function teste1(num) {
    if(num > 7)
        console.log(num)
    
    console.log('Final') // Sempre será executado, pós não está interligado a estrutura IF. Pós não contém chaves de bloco, então apenas a primeira sentença está ligada ao IF
}

teste1(6);
teste1(8);

function teste2(num) {
    if(num > 7) { // cuidado com o ;, não usar com as estruturas de controle
        console.log(num)
    }
}

teste2(6);
teste2(8);