let cont = 0; let fx1 = 0; let fx2 = 0; let fx3 = 0; let fx4 = 0; let fx5 = 0

for(cont = 1; cont < 9; cont++){
    let idade = Number(prompt("Digite a idade: "))
    if(idade <= 15){
        fx1++
    }
    else if(idade >= 16 && idade <= 30){
        fx2++
    }
    else if(idade >= 31 && idade <= 45){
        fx3++
    }
    else if(idade >= 46 && idade <= 60){
        fx4++
    }
    else if(idade > 60){
        fx5++
    }
}

console.log(`Foram informados ${fx1} na 1ª Faixa, ${fx2} na 2ª Faixa, ${fx3} na 3ª Faixa, ${fx4} na 4ª Faixa e ${fx5} na 5ª Faixa`)
console.log(`Tem ${(fx1*100)/cont}% de pessoas na 1ª Faixa`)
console.log(`Tem ${(fx5*100)/cont}% de pessoas na 5ª Faixa`)