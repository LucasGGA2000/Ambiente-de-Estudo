// TV 50 POL: TERÇA OK, QUINTA OK = OPERADOR E
// TV 30 POL: TERÇA OK, QUINTA NO = OPERADOR XOR
// SORVETE: TERÇA OK, QUINTA OK - TERÇA OK - QUINTA NO = OR
// SAUDAVEL: NÃO TOMAR SORVETE = NEGAÇÃO 

function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2; // binario
    const comprarTv50 = trabalho1 && trabalho2; // binario
    // const comprarTv32 = (trabalho1 ^ trabalho2); // bitwise xor // binario
    const comprarTv32 = (trabalho1 != trabalho2); // xor // binario
    const manterSaudavel = !comprarSorvete; // unario    

    // return { comprarSorvete: comprarSorvete, comprarTv50: comprarTv50, comprarTv32: comprarTv32, manterSaudavel: manterSaudavel}; // forma padrão
    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}; // recurso novo ECMA 2015
}

// console.log(compras(true, true)); // TRUE, TRUE, FALSE, FALSE
// console.log(compras(true, false)); // TRUE, FALSE, TRUE, FALSE
// console.log(compras(false, true)); // TRUE, FALSE, TRUE, FALSE
console.log(compras(false, false)); // FALSE, FALSE, FALSE, TRUE