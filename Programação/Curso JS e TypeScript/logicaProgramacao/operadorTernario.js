// (condicao) ? 'valor true' :  'valor false'
// 1- Objetivo é captar pontuação de um usuário
// 2- Definir cor padrão com OR

const usuario = 999;

// if(usuario >= 1000) {
//     console.log('Usuario nivel alto');
// } else {
//     console.log('Usuario nivel baixo');
// }

const pontuacaoUsuario = usuario >= 1000 ? 'Usuario nivel alto' : 'Usuario nivel baixo';
console.log(pontuacaoUsuario);


const corUsuario = null;
const setCor = corUsuario || 'Preto';

console.log(setCor);