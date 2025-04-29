import Deque from "./deque.mjs"

let listaCompra = new Deque()

console.log(listaCompra.isEmpty)
console.log(listaCompra.print())

//Alimentício -> inicio
listaCompra.insertFront("Arroz")
listaCompra.insertFront("Feijão")

//Higiene -> final
listaCompra.insertBack("Sabão em pó")

console.log(listaCompra.print())

let removido = listaCompra.removeBack()
console.log({removido})