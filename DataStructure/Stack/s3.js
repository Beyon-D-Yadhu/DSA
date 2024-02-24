//find the middle element from stack
class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Stack{
    constructor(){
        this.top = null
    }
    
    insert(value){
        let node = new Node(value)
        if(!this.top){
            this.top = node
        }else{
            node.next = this.top
            this.top = node
        }
    }
//find the middle element from stack

    middleElement(){
        let slow = this.top
        let fast = this.top
        while(fast&&fast.next){

            fast = fast.next.next
            if(!fast){
                break;
            }
            slow = slow.next
        }
        console.log('middle element = ',slow.value)
    }
    print(){
        let curr = this.top
        while(curr){
            console.log(curr.value)
            curr = curr.next
        }
    }
}


let stack = new Stack()
stack.insert(1)
stack.insert(2)
stack.insert(3)
stack.insert(4)
stack.insert(5)
stack.insert(6)
stack.insert(7)

stack.print()
stack.middleElement()