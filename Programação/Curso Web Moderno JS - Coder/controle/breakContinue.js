const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(let x in nums) {
    if(x == 5) break // quando tem uma unica sentença de código, pode omitir chaves de blocos
    // o break não agi em cima de um IF, age em cima do bloco mais próximo do tipo FOR, WHILE e SWITCH
    console.log(`${x} = ${nums[x]}`) // fora do IF
}

for (let y in nums) {
    if(y == 5) continue // vai interroper a repetição atual e vai para próxima repetição
    // Agi no laço mais proximo FOR ou WHILE
    console.log(`${y} = ${nums[y]}`)
}

// as duas causa desvio de fluxo
// break: desvio de fluxo pra fora do laço corrente
// continue: interrompe a repetição corrente e vai para próxima repetição


// rotulo

externo: for(let a in nums) {
    for(let b in nums) {
        if (a == 2 && b ==3) break externo
        console.log(`Par = ${a}, ${b}`)
    }
}