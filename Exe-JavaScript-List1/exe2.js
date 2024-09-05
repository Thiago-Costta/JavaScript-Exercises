function exe2(){
    let preco = 5.00
    let qtde = 120
    let maior = 0
    let prec2 = 0
    let qtde2 = 0
    const despesa = 200.00 // constante
    while(preco>= 1.00){
        let lucro = (preco * qtde) - despesa
        console.log(`Preço: R$${preco}\nQtde: ${qtde}\nLucro: R$${lucro}`)
        if (lucro > maior){
            maior = lucro
            prec2 = preco
            qtde2 = qtde
        }
        preco = preco - 0.50
        qtde = qtde + 26
    }
    console.log(`O lucro maior foi: R$${maior} com ingresso sendo vendido à R$${prec2} e tendo ${qtde2} unidades vendidas`)
}