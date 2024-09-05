do{
    let opcao = Number(prompt("Digite uma opção:\n1. Média Aritmética\n2. Média Ponderada\n3. Sair\nDigite a opção desejada: "))
    switch(opcao){
        case 1: num = Number(prompt("Digite o primeiro numero: "))
                num2 = Number(prompt("Digite o segundo numero: "))
                
                console.log(`A média aritmética é ${(num + num2)/ 2}`)
        break;
        case 2: num = Number(prompt("Digite a primeira nota: "))
                pes = Number(prompt("Qual o peso da primeira nota: "))

                num2 = Number(prompt("Digite a segunda nota: "))
                pes2 = Number(prompt("Qual o peso da segunda nota: "))

                num3 = Number(prompt("Digite a terceira nota: "))
                pes3 = Number(prompt("Qual o peso da terceira nota: "))

                console.log(`A média ponderada é ${((num*pes)+(num2*pes2)+(num3*pes3))/(pes+pes2+pes3)}`)
        break;
        case 3: console.log(`Programa finalizado!`)
        break;
        default: alert(`Informe uma de três notas`)
    }
} while(opcao != 3)