//6. Diagonal Principal como Vetor: Implemente uma função que receba uma matriz n x n e retorne a diagonal principal como um vetor.

let diagonalPrincipal = (map) => {
    return mat.map(
        (vetor, i) => vetor.filter(
            (elem, j) => i == j
        )[0]
    )
}
let mat = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
let novoVet = diagonalPrincipal(mat)
console.log(novoVet)