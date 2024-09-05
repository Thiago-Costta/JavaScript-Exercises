//4. Somar Vetores Correspondentes: Dada uma matriz 3x3, escreva uma função que some todos os elementos de cada linha, retornando um vetor com a soma de cada linha.


let somaVetores = (mat) => {
    return mat.map(
        vetor => vetor.reduce(
            (acum, elem) => acum + elem, 0
        )
    )
}

let mat = [[2, 3, 4], [9, 8, 1], [3, 4, 5]]
console.log(somaVetores(mat))