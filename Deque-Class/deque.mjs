export default class Deque {
    #data // Algo privado
    constructor(){
        this.#data = [] // Vetor vazio
    }
    //Método para inserção no inicio da estrutura
    insertFront(val){
        this.#data.unshift(val)
    }
    //Método para inserção no final da estrutura
    insertBack(val){
        this.#data.push(val)
    }
    //Método para remoção do ínicio da estrutura
    removeFront(){
        return this.#data.shift()
    }
    //Método para remoção do final da estrutura
    removeBack(){
        return this.#data.pop()
    }
    //Método para consultar o início da estrutura
    peekFront(){
        return this.#data[0]
    }
    //Método para consultar o final da estrutura
    peekBack(){
        return this.#data[this.#data.lenght - 1]
    }
    //Getter para informar se a estrutura está ou não vazia 
    get isEmpty(){
        return this.#data.lenght === 0
    }
    //Método que imprime a estrutura (para efeitos de depuração)
    print(){
        let output = "[ "
        for(let i = 0; i < this.#data.length; i++){
            if(output !== "[ "){
                output += ", "
            }
            output += `(${i}): ${this.#data[i]}`
        }
        return output + " ]"
    }
}