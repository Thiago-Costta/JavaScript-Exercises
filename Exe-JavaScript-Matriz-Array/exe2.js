//2. Extrair Linha como Vetor: Dada uma matriz 4x4, escreva uma função que receba um índice de linha e retorne essa linha como um vetor.


let linhaMatriz = (mat, indiceLinha) => {
    return mat[indiceLinha]
}
let mat = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]
console.log(linhaMatriz(mat, 1))
console.log(linhaMatriz(mat, 0))
console.log(linhaMatriz(mat, 3))
let mat2 = [[1, 2], [3, 4]]
console.log(linhaMatriz(mat2, 1))