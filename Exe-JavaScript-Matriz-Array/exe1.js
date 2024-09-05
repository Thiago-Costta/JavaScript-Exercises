//1. Criar uma Matriz a partir de Vetores: Dado um vetor de 9 elementos, escreva uma função que organize esses elementos em uma matriz 3x3.


let vetParaMat = (vet)=> {
    return[
        vet.slice(0,3),
        vet.slice(3,6),
        vet.slice(6,9)
    ]
}

let vet = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let mat = vetParaMat(vet)
console.log(mat)