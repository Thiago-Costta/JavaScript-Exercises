let opcao

do {
    opcao = Number(prompt(`QUAL OPÇÃO DESEJADA:\n1 - Novo Salário\n2 - Férias\n3 - Décimo Terceiro\n4 - Sair\n\nDigite a opção desejada`))
    switch(opcao) {
        case 1:
            let conta
            let salario = Number(prompt(`Digite o salario do funcionario: `))
            if(salario > 0.00 && salario < 210.00) {
                conta = salario * 1.15
            }
            else if(salario >= 210.00 && salario <= 600.00) {
                conta = salario * 1.10
            }
            else if(salario > 600.00) {
                conta = salario * 1.05
            }
            else{
                alert(`Valor inválido!`)
            }
            alert(`O novo salário é de: R$${conta.toFixed(2)}`)
        break;
        case 2:
            let ferias
            let salarioFerias = Number(prompt(`Digite o salário: `))
            ferias = salarioFerias + (salarioFerias / 3)
            alert(`O valor das férias é de: R$${ferias.toFixed(2)}`)
        break;
        case 3:
            let decimoTerceiro
            let salarioFuncionario = Number(prompt(`Digite o salário: `))
            let meses = Number(prompt(`Quantos mês foram trabalhados: `))
            if(salarioFuncionario < 0.00 || meses < 0 || meses > 12) {
                alert(`Valores informados são inválidos!`)
            }
            else{
                decimoTerceiro = (salarioFuncionario * meses) / 12
            }
            alert(`O valor do décimo terceiro é de: R$${decimoTerceiro.toFixed(2)}`)
            break;
            case 4:
            break;
            default: 
                alert(`Opção informada inválida!`)
    }
}while(opcao != 4)