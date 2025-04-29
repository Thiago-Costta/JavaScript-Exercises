import Deque5 from "./Deque5.mjs"

let deque = new Deque5()

deque.insertFront("Arroz")
deque.insertFront("Feijão")
deque.insertBack("Batata")
deque.insertBack("Arroz")
deque.insertFront("Azeite")

console.log(deque.print())