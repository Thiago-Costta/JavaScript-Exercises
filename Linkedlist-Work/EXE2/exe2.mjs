import LinkedList2 from "./LinkedList2.mjs"

const lista2 = new LinkedList2()

lista2.insert(0, "Item1")
lista2.insert(1, "Item2")
lista2.insert(2, "Item3")
console.log("Lista antes de inverter: ", lista2.print())
lista2.reverse()
console.log("Lista após inversão: ", lista2.print())