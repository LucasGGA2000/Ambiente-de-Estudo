// Cria uma função que gera um número aleatório entre 2 números passados via params
function getInteiroAleatorioEntre(min, max) {
    // O Math.randon cria um número entre 0 e 1, ex: 0.5152988406908281
    // Então este número é multiplicado pela subtração do numero maior (max) pelo menor (min)
    // Depois é somado ao menor (min) e armazenado na constante valor
    const valor = Math.random() * (max - min) + min
    // retorna o número arredondado pra baixo e sem casas decimais
    return Math.floor(valor)
  }

  let opcao = 0;

  while(opcao != -1) {
      opcao = getInteiroAleatorioEntre(-1, 10)
      console.log(`Opção escolhida foi ${opcao}.`)
  }

  console.log('Até a próxima!')