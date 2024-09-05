let idade = []
let peso = []
let altura = []
let totalPessoas = 10

// Coleta de Dados
for(let i = 0; i < totalPessoas; i++) {
    idade.push(Number(prompt(`Digite a idade da ${i+1}ª pessoa: `)))
    peso.push(Number(prompt(`Digite o peso da ${i+1}ª pessoa: `)))
    altura.push(Number(prompt(`Digite a altura da ${i+1}ª pessoa: `)))
}

// Processamento
let cont = 0; let porc = 0
for(let i = 0; i < totalPessoas; i++) {
    if(peso[i] > 90 && altura[i] < 150) {
        cont++
    }
    else if(idade[i] >= 10 && idade[i] <= 30 && altura[i] > 190) { 
        porc++
    }
}
let media = (totalPessoas / idade.length)
let porcentagemPessoas = (porc / totalPessoas) * 100

// Console

console.log(`A media de idade total é: ${media}\nA quantidade de pessoas com +90Kg e -150Cm é: ${cont}\nA porcentagem de pessoas entre 10 á 30 e com +190Cm é: ${porcentagemPessoas}%`)