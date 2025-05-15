class Node {
  constructor(val) {
    this.prev = null; // Ponteiro para o nodo anterior da sequência
    this.data = val; // Informação relevante para o usuário
    this.next = null; // Ponteiro para o próximo nodo da sequência
  }
}

export default class DoublyLinkedList {
  #head; // ínicio da lista (cabeça)
  #tail; // fim da lista (cauda)
  #count; // quantidade de elementos da lista

  constructor() {
    this.#head = null;
    this.#tail = null;
    this.#count = 0;
  }

  //getter que retorna se a lista está vazia ou não
  get isEmpty() {
    return this.#count === 0;
  }

  //getter que retorna a quantidade de elementos da lista
  get count() {
    return this.#count;
  }

  //método privado que encontra um nodo por sua posição
  #findNode(pos) {
    let node;
    //nodo encontra-se na primeira metade da lista
    if (pos < this.#count / 2) {
      node = this.#head;
      for (let i = 0; i < pos; i++) node = node.next;
      //nodo encontra-se na segunda metade da lista
    } else {
      node = this.#tail;
      for (let i = this.#count - 1; i > pos; i--) node = node.prev;
    }
    return node;
  }
  //método para inserir em qualquer posição
  insert(pos, val) {
    let inserted = new Node(val);

    //1º caso: lista vazia
    if(this.isEmpty){
        this.#head = inserted
        this.#tail = inserted        
    }
    //2º caso: inserção na primeira posição
    else if(pos === 0){
      inserted.next = this.#head
      this.#head.prev = inserted
      this.#head = inserted
    }
    //3º caso: inserção na última posição
    else if(pos >= this.#count){
      inserted.prev = this.#tail
      this.#tail.next = inserted
      this.#tail = inserted
    }
    //4º caso: inserção em posição intermediária
    else{
      let nodePos = this.#findNode(pos)
      let before = nodePos.prev
      before.next = inserted
      inserted.prev = before
      inserted.next = nodePos
      nodePos.prev = inserted
    }
    this.#count++
  }
  //método para remover um elemento de qualquer posição
  remove(pos) {
    //1º caso: lista vazia
    if(this.isEmpty) return null
    //2º caso: remoção da primeira posição
    
    let removed

    if(pos === 0){
      removed = this.#head
      this.#head = this.#head.next
      this.#head.prev = null
    }
    //3º caso: remoção da última posição
    else if(pos >= this.#count - 1){
      removed = this.#tail
      this.#tail = this.#tail.prev
    }
    //4º caso: remoção em posição intermediária
    else{
      removed = this.#findNode(pos)
      let before = removed.prev
      let after = removed.next
      before.next = after
      after.prev = before
    }
    this.#count--
    return removed.data
  }
}