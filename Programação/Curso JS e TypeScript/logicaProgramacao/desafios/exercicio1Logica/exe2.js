// Escreva uma função chama ePaisagem que receba dois argumentos,
// largura e altura de uma imagem (number).
// Retorne true se a imagem estiver no modo paisagem.

const ePaisagem = (largura, altura) => largura >= altura ? 'Modo paisagem' : 'Modo retrato'

console.log(ePaisagem(1080, 1920));