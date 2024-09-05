let altMedia = 0
let i = 0
let cont = 0
let media = 0
let idade, altura
// Coleta de Dados

do {
    idade = Number(prompt(`Qual a idade da ${i+1}ª Pessoa: `))
    altura = Number(prompt(`Qual a altura da ${i+1}ª Pessoa: `))
    if(idade > 50) {
        media = media + altura
        cont++
    }
    i++
} while(idade > 0)

// Processamento

altMedia = media / cont

// Console

console.log(`A media da altura das pessoas com +50 anos é: ${altMedia}`)