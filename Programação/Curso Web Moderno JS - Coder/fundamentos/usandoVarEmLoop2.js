const funcs = []

for (var i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i);
    })
}

// Var não tem escopo de bloco, por esse motivo o valor será 10 e não dos índices informados

funcs[2]();
funcs[8]();