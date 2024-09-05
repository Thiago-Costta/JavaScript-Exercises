let idade = []
let peso = []
let altura = []
let olho = []
let cabelo = []
let media = []
let totalPessoas = 6

// Coleta de Dados

for(let i = 0; i < totalPessoas; i++) {
    idade.push(Number(prompt(`Digite a idade da ${i+1}ª pessoa: `)))
    peso.push(Number(prompt(`Digite o peso da ${i+1}ª pessoa: `)))
    altura.push(Number(prompt(`Digite a altura da ${i+1}ª pessoa: `)))
    olho.push(prompt(`Qual a cor dos olhos da ${i+1}ª pessoa:\nA - Azul\nP - Preto\nV - Verde\nC - Castanho`))
    cabelo.push(prompt(`Qual a cor do cabelo da ${i+1}ª pessoa:\nP - Preto\nC - Castanho\nL - Loiro\nR - Ruivo`))
}

//Processamento

let quantInfeSup = 0; let mdi = 0; let count = 0; let count2 = 0; let count3 = 0;

for(let i = 0; i < totalPessoas; i++) {
    if(idade[i] > 50 && peso[i] < 60) {
        quantInfeSup++
    }
    else if(altura[i] < 150) {
        mdi += idade[i]
        count++
    }
    else if(olho[i] == 'A') {
        count2++
    }
    else if(cabelo[i] == 'R' && olho[i] != 'A') {
        count3++
    }
}

// Calculo

if(count > 0) {
    media.push(mdi / count)
}
let porcentagemOlho = 0 + (count2 / olho.length) * 100
let porcentagemRuiva = 0 + (count3 / cabelo.length) * 100

//Console

console.log(`Quantidade de pessoas com +50 anos e -60Kg: ${quantInfeSup}\nMedia de idade(Pessoas -150Cm): ${media.length}\nPorcentagem de olhos azuis: ${porcentagemOlho.toFixed(2)}%\nPorcentagem de cabelos ruivos(Sem olho azul): ${porcentagemRuivo.toFixed(2)}%`);