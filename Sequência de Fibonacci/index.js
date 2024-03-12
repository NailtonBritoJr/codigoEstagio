function verificaFibonacci(numero) {
    let a = 0;
    let b = 1;

    while (b <= numero) {
        if (b === numero) {
            console.log(`${numero} pertence à sequência de Fibonacci.`);
            return;
        }
        let temp = b;
        b = a + b;
        a = temp;
    }

    console.log(`${numero} não pertence à sequência de Fibonacci.`);
}

// Exemplo de uso:
verificaFibonacci(13);
verificaFibonacci(10);
