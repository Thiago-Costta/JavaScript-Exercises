function exe1(){
    let a = Number(prompt("Primeiro Número: "))
    let b = Number(prompt("Segundo Número: "))
    let c = Number(prompt("Terceiro Número: "))
    let d = Number(prompt("Quarto Número: "))
    let aux
    let conta = 1
    while (conta <= 3){
        if (a>b){ // Se "a" for MAIOR que "b", TROCA
            aux = a; a = b; b = aux;
        }
        if (b>c){ // Se "b" for MAIOR que "c", TROCA
            aux = b; b = c; c = aux;
        }
        if(c>d){ // Se "c" for MAIOR que "d", TROCA
            aux = c; c = d; d = aux;
        }
        conta++ // <-- IGUAL: conta = conta + 1
    }
    alert(`Ordem crescente ${a}${b}${c}${d}\nOrdem decrescente ${d}${c}${b}${a}`)
}
    
