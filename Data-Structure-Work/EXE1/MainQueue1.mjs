import Queue1 from "./Queue1.mjs";

let fila = new Queue1()

fila.enqueue("Thiago")
fila.enqueue("Filipe")
fila.enqueue("Carlos")
fila.dequeue()

console.log(fila.print())
console.log(fila.getOperationCount())

