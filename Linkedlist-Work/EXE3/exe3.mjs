import LinkedList3 from "./LinkedList3.mjs";

let lista = new LinkedList3()

lista.insert(0, "Item1")
lista.insert(0, "Item2")
lista.insert(0, "Item1")
lista.insert(0, "Item3")
lista.insert(0, "Item1")

console.log("Lista atual ", lista.print())

lista.countOccurrences("Item1")

lista.countOccurrences("Item2")