import LinkedList4 from "./LinkedList4.mjs";

let lista = new LinkedList4();

lista.insert(0, "Item1")
lista.insert(0, "Item2")
lista.insert(0, "Item1")
lista.insert(0, "Item3")
lista.insert(0, "Item1")

lista.removeAll("Item1")
