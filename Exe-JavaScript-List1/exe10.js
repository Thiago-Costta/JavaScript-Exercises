let numero
let somaPares = 0
let somaPrimos = 0
for(let i = 1; i <= 10; i++){
    numero = Number(prompt(`Informe o número ${i}`))
    // Verificar resto da divisão por 2
    if(numero % 2 == 0){
        somaPares = somaPares + numero
    }
    let primo = true // Todo numero é primo
    for(let contador = 2; contador < numero; contador++){
        if(numero % contador == 0){
            primo = false // Não é primo
            break // sai do for
        }
    }
    if(primo && numero != 0 && numero != 1){
        console.log(`O numero ${numero} é primo`)
        somaPrimos = somaPrimos + numero
    }
}
console.log(`Soma dos pares ${somaPares}`)
console.log(`Soma dos primos ${somaPrimos}`)