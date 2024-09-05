/* Ex1: Dado um array de números, use a função map() para criar um novo array que contenha o quadrado de cada número do array original.
*/

var numeros = [2, 4, 6, 8, 10]

let quad = numeros.map(numero => numero * numero)
console.log(quad)