class Node {
    
    // classe que representa a unidade de armazenamento da lista encadeada
    constructor(val) {
        
        this.data = val // Informção relevante para o usuário
        this.next = null // Ponteiro para o próximo nodo da sequência

    }

}
// Classe que representa a estrutura de dados lista encadeada
export default class LinkedList2 {
    #head // Início da lista (Cabeça)
    #tail // Fim da lista (Cauda)
    #count // Quantidade de nodos da lista


    constructor() {
        this.#head = null
        this.#tail = null
        this.#count = 0
    }

// Getter que retorna se a lista encadeada está vazia ou não
    get isEmpty() {
        return this.#count === 0
    }

// Getter que retorna a quantidade de elementos da Lista
    get count() {
        return this.#count
    }

// Método para inserir em qualquer posição
    insert(pos, val) {
        // Cria o nodo para armazenar o valor pretendido
        const inserted = new Node(val)

        // 1º Caso: A lista está vazia
        if(this.isEmpty) {
            this.#head = inserted
            this.#tail = inserted
        }

        // 2º Caso: A lista não está vazia, inserção na primeira posição 
        else if(pos === 0) {
            inserted.next = this.#head 
            this.#head = inserted
        }

        // 3º Caso: Iserção no final da lista
        else if(pos >= this.#count) {
            this.#tail.next = inserted
            this.#tail = inserted
        }

        // 4º Caso: Inserção em posição intermediária
        else{
            let before = this.#head //começa pelo primeiro nodo

            for(let i = 1; i < pos; i++) {
                before = before.next
            }

            let after = before.next
            inserted.next = after
            before.next = inserted
        }
        this.#count++ // Atualiza a quantidade de nodos da lista
        return inserted.data // Retorna o valor inserido
    }

    //Método para insersão na primeira posição
    insertHead(val) {
        this.insert(0, val)
    }
    
    // Método para inserção na última posição
    insertTail(val) {
        this.insert(this.#count, val)
    }

    //Método de remoção de um nodo na lista
    remove(pos) {
        // 1º Caso: A lista está vazia ou a posição é inválida
        if(this.isEmpty || pos < 0 || pos >= this.#count) {
            return undefined
        }
        let removed // Variável para armazenar o nodo removido
        // 2º Caso: Remoção do primeiro nodo
        if(pos === 0) {
            removed = this.#head
            this.#head = this.#head.next
            // Se a lista só tinha um nodo, atualiza a cauda também
            if(this.#count === 1) {
                this.#tail = null
            }
        }

        // 3º Caso: Remoção de um nodo intermediário
        else {
            let before = this.#head

            for(let i = 1; i < pos; i++) {
                before = before.next
            }

            removed = before.next
            let after = removed.next
            before.next = after
            // Se o nodo removido for o último, atualiza a cauda
            if(pos === this.#count - 1) {
                this.#tail = before
            }
 
        }
        this.#count-- // Atualiza a quantidade de nodos da lista
        return removed.data // Retorna o valor removido

        
    }
     // Método para inserção na primeira posição (Atalho)
     insertHead(val) {
        this.insertHead(0, val)
    }

    // Método para última inserção na última posição 
    inserTail(val) {
        this.insert(this.#count, val)
    }

    // Método para remover o primeiro no da lista (Atalho)
    removeHead() {
        return this.remove(0)
    }

    // Método pare remover o último nodo da lista (Atalho)
    removeTail() {
        return this.remove(this.#count -1)
    }

    reverse(){
        let anterior = null;
        let atual = this.#head;
        let proximo = null;

        for (let i = 0; i < this.#count; i++) {
            proximo = atual.next;
            atual.next = anterior;
            anterior = atual;
            atual = proximo;
        }

        // Trocar head e tail
        let troca = this.#head;
        this.#head = this.#tail;
        this.#tail = troca;
    }
    // Método para verificar a posição da primeira ocorrência de um valor na lista
    // Retorna: 
    // 1º Caso: Se o valor existir, a posição onde ele foi encontrado 
    // 2º Caso: Se o valor não existir retorna -1    
    indexOf(val){
        //1° Caso: lista vazia
        if (this.isEmpty){
            return -1
        }
    

        //2° Caso: se o nodo contém o valor procurado, retorna a posição
        let node = this.#head
        for(let i = 0; i < this.#count; i++){
            if(node.data === val){
                return i
            }
            node = node.next
        }
        return -1
    }


    // Método que retorna um nodo da lista de acordo com sua posição
    peek(pos) {
        // 1º Caso: lista vazia ou posição fora dos  limites 
        if (this.isEmpty || pos < 0 || pos > this.#count -1) {
            return -1
        }

        // 2º Caso: Busca sequencial 
        let node = this.#head
        for(let i = 0; i < pos; i++) {
            node = node.next
        }
        return node.data
    }

    peekHead() {
        return this.peek(0)
    }
    peekTail() {
        return this.peek(this.#count - 1)
    }

    // Método que imprime o deque (para efeitos de depuração)
    print(){
        let output = '( '
        let node = this.#head
        for(let i = 0; i < this.#count; i++) {
            if (output !== '( ') output += ', '
            output += `[${i}]: ${node.data}`
            node = node.next
        }
        output += ` ), count: ${this.#count}`
        return output
    }
}
