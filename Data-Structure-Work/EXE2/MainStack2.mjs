import Stack2 from "./Stack2.mjs";

let pilha = new Stack2() 

pilha.push("Google")
pilha.push("YouTube")
pilha.pop()
pilha.push("Facebook")
pilha.push("Pinterest")

console.log(pilha.print())
console.log(pilha.history())