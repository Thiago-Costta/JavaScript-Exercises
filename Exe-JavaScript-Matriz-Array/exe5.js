//5. Produto Escalar entre Vetor e Matriz: Escreva uma função que receba um vetor e uma matriz 3x3, e retorne um novo vetor onde cada elemento é o produto escalar entre o vetor e a respectiva linha da matriz.


let prodVetMat = (mat, vetor) => {
    return mat.map(
        (vet, pos) => vet.reduce(
            (acum, elem) => acum + (elem * vetor[pos]), 0
        )
    )
}
let mat = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
let vet = [1, 2, 3]
console.log(prodVetMat(mat, vet))