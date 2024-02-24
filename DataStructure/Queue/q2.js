//Queue usnig linked list

class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Queue{
    constructor(){
        this.head = null
        this.tail = null
    }

    enqueue(value){
        let node = new Node(value)
        if(!this.head){
            this.head = node
            this.tail = node
        }else{
            this.tail.next = node
            this.tail = node
        }
    }

    dequeue(){
        if(!this.head){
            return null
        }if(!this.head.next){
            let temp = this.head
            this.head = null
            this.tail = null
            return temp
        }
        let temp = this.head
        this.head = this.head.next
        return temp
    }
    peek(){
        if(!this.head)return null
        return this.head.value
    }
}

let q1 = new Queue()
q1.enqueue(1)
q1.enqueue(2)
q1.enqueue(3)
q1.enqueue(4)
q1.enqueue(5)
q1.enqueue(6)
q1.enqueue(7)
console.log('first element = ',q1.peek())
q1.dequeue()
console.log('first element = ',q1.peek())