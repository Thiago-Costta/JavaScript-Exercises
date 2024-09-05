let juros = 0; let total = 0
let tipo, valorInvestido
do {
    tipo = Number(prompt(`QUAL O TIPO DE CONTA:\n\n1 - Poupança\n2 - Poupança Plus\n3 - Fundos de Renda Fixa\n\nDigite a opção`))
    switch(tipo) {
        case 1:
        valorInvestido = Number(prompt(`Qual o valor investido: `))    
        if(valorInvestido < 0.00) {
            alert(`Valor informado inválido!`)
        }
        else {
            juros = valorInvestido * 0.015
            total = juros + valorInvestido
            alert(`Opção selecionada:\n\nPOUPANÇA\n\nJuros mensal de: R$${juros.toFixed(2)}\nInvestimento inicial de: R$${valorInvestido}\nValor final com juros mensal de: R$${total.toFixed(2)}`)
        }
        break;
        case 2:
        valorInvestido = Number(prompt(`Qual o valor investido: `))    
        if(valorInvestido < 0.00) {
            alert(`Valor informado inválido!`)
        }
        else {
            juros = valorInvestido * 0.020
            total = juros + valorInvestido
            alert(`Opção selecionada:\n\nPOUPANÇA PLUS\n\nJuros mensal de: R$${juros.toFixed(2)}\nInvestimento inicial de: R$${valorInvestido}\nValor final com juros mensal de: R$${total.toFixed(2)}`)
        }
        break;
        case 3:
        valorInvestido = Number(prompt(`Qual o valor investido: `))    
        if(valorInvestido < 0.00) {
            alert(`Valor informado inválido!`)
        }
        else {
            juros = valorInvestido * 0.040
            total = juros + valorInvestido
            alert(`Opção selecionada:\n\nFUNDOS DE RENDA\n\nJuros mensal de: R$${juros.toFixed(2)}\nInvestimento inicial de: R$${valorInvestido}\nValor final com juros mensal de: R$${total.toFixed(2)}`)
        }
        break;
        default:
            alert(`Opção informada inválida!`)
    }
}while(tipo > 0)