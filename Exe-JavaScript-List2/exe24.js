let maior = -Infinity; let menor = Infinity
let numero
do {
    numero = Number(prompt(`Digite um número: `))
    if(numero < 0) {
        alert(`Número digita é inválido!`)
    }
    else if(numero != 0 && numero < menor) {
        menor = numero
    }
    else if(numero > maior) {
        maior = numero
    }
}while(numero != 0);

alert(`O maior número informado foi ${maior}\nE o menor número informado foi ${menor}`)