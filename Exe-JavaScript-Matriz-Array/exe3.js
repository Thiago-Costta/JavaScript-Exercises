//3. Extrair Coluna como Vetor: Dada uma matriz 5x5, escreva uma função que receba um índice de coluna e retorne essa coluna como um vetor.


let colunaMatriz = (mat, indiceColuna) => {
    return mat.map(
        vetor => vetor[indiceColuna]
    )
}
let mat = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
console.log(colunaMatriz(mat, 1))