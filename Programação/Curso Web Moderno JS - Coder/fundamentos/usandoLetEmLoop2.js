const funcs = [];

for (let i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i);
    })
}

// Como o let tem escopo de bloco, os valores dos índices informados serão imprimido. Diferente se for usando o VAR que não tem escopo de bloco

funcs[2]();
funcs[8]();