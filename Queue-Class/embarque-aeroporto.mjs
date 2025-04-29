/*
    No aeroporto, os passageiros embarcam no avião seguindo a ordem de check-in.
    A sequência inicial de passageiros é:

    * Passageiro A
    * Passageiro B
    * Passageiro C
    * Passageiro D
    * Passageiro E
    
    1-) Crie um objeto filaAeroporto e insira os passageiros na fila corretamente.

    2-) Imprima a fila antes do início do embarque.

    3-) O primeiro passageiro foi chamado para o embarque. Remova esse passageiro e mostre o nome dele.

    4-) Imprima a fila após a remoção.

    5-) Três novos passageiros fizeram check-in:

    * Passageiro F
    * Passageiro G
    * Passageiro H
    
    Adicione-os à fila.

    6-) Imprima a fila após as alterações.

    7-) Quem é o próximo passageiro a embarcar? Mostre o comando e o nome do passageiro.

    8-) O próximo passageiro foi chamado. Remova essa pessoa e imprima a fila atualizada.

    */

import Queue from "./Queue.mjs";

let filaAviao = new Queue()

filaAviao.enqueue("Passageiro A")
filaAviao.enqueue("Passageiro B")
filaAviao.enqueue("Passageiro C")
filaAviao.enqueue("Passageiro D")
filaAviao.enqueue("Passageiro E")

console.log(filaAviao.print())
filaAviao.dequeue(console.log(filaAviao.peek()))
console.log(filaAviao.print())

filaAviao.enqueue("Passageiro F")
filaAviao.enqueue("Passageiro G")
filaAviao.enqueue("Passageiro H")

console.log(filaAviao.print())

filaAviao.dequeue(console.log(filaAviao.peek()))
console.log(filaAviao.print())