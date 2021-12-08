// o try executa error ou o código "perigoso"
// o catch trata o erro 

// try {
//     console.log(naoExiste);
// } catch(err) {
//     console.log('naoExisto não existe.');   
//     console.log(err);
// }

function soma(x, y) {
    if(typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('x e y precisam ser números');
    }

    return x + y;
}

try {   
    console.log(soma(1, 2));
    console.log(soma('1', 2));
} catch(error) {
    // console.log(error)
    console.log('Alguma coisa mais amigável para o usuário.');
}