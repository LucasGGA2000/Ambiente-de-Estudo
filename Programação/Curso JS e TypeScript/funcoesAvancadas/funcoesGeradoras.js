function global() {
    function* geradora1() {
        // Código qualquer ... 
        yield 'valor 1';

        // Código qualquer ... 
        yield 'valor 2';
        // Código qualquer ... 

        yield 'valor 3';
    }

    const g1 = geradora1();
    console.log(g1.next().value);
    console.log(g1.next().value);
    console.log(g1.next());
}

function* gerador2() {
    let i = 0;

    while (true) {
        yield i;
        i++;
    }
}


const g2 = gerador2();
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);