import LinkedList1 from "./LinkedList1.mjs";

const lista = new LinkedList1()

lista.insert(0, "Item1")
lista.insert(1, "Item2")
lista.insert(2, "Item3")
console.log("Lista atual: ", lista.print())

console.log("Histórico de remoções: ", lista.history())

lista.remove(1)

console.log("Lista após remoção: ", lista.print())

console.log("Histórico de remoções: ", lista.history())

