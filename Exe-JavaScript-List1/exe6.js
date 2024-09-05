let codigo
let valor
let totalVista = 0; let totalPrazo = 0
for(let i = 1; i <= 5; i++){
    codigo = prompt(`Informe V (vista) ou P (prazo): `).toUpperCase() // "toUpperCase" para deixar em maiúsculo
    valor = Number(prompt(`Informe o valor`))
    if(codigo == 'V'){
        totalVista = totalVista + valor
    }
    else if(codigo == 'P'){
        totalPrazo = totalPrazo + valor
    }
    else {
        console.log(`Código inválido`)
    }
}
console.log(`Valor total a vista ${totalVista}\nValor total a prazo ${totalPrazo}\nValor total das compras ${totalPrazo + totalVista}\nValor da 1ª prestação a prazo ${totalPrazo / 3} `)