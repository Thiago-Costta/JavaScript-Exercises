let vetor = []
let mult2 = []
let mult3 = []
let mult2e3 = []

for(let i = 0; i < 7; i++) {
    vetor.push(Number(prompt(`Informe um número: `)))
}

for(let i = 0; i < 7; i++) {
    if(vetor[i] % 2 == 0 && vetor[i] % 3 == 0) {
        mult2e3.push(vetor[i])
    }
    else if(vetor[i] % 2 == 0) {
        mult2.push(vetor[i])
    }
    else if(vetor[i] % 3 == 0) {
        mult3.push(vetor[i])
    }
}
console.log(`Elementos multiplos de 2: ${mult2.length}\nElementos multiplos de 3: ${mult3.length}\nElementos multiplos de 2 e 3: ${mult2e3.length}`)