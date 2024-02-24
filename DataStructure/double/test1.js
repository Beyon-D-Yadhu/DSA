class Node{
    constructor(value){
        this.prev = null
        this.value = value
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.tail = null
    }

    append(data){
        let node = new Node(data)
        if(!this.head){
            this.head = node
            this.tail = node
        }else{
            node.prev = this.tail
            this.tail.next = node
            this.tail = node
        }
    }
    print(){
        let str = ''
        let curr = this.head
        while(curr){
            str+=`${curr.value} `
            curr = curr.next
        }
        console.log(str)
    }
}

let Dll = new LinkedList()
Dll.append(56)
Dll.append(34)
Dll.append(34)

Dll.print()