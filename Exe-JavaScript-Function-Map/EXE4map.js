/* Exe4: Dado um array de strings, use a função map() para criar um novo array onde cada string seja concatenada com a string " - Processada".
 */

var carros = ["Onix", "Gol", "Uno"]

let concatena = carros.map(carro => carro.concat(" - Processando"))
console.log(concatena)