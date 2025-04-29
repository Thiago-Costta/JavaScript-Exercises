import Deque3 from "./Deque3.mjs"

let deque = new Deque3()

deque.insertFront("Thiago")
deque.insertFront("Sofia")
deque.insertBack("Filipe")
deque.insertBack("Andrey")
deque.insertFront("Rafael")

deque.insertBack("Guinati")
deque.insertFront("Biel")

console.log(deque.print())