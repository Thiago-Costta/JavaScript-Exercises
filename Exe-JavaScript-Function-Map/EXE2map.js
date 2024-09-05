/* Exe2: Dado um array de strings, use a função map() para criar um novo array onde cada string seja convertida para letras maiúsculas.
*/

var nomes = ["t", "h", "i", "a", "g", "o"]

let maior = nomes.map(nome => nome.toUpperCase())
console.log(maior)
