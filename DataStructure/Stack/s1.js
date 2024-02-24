//create a Stack using linked list
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
    push(ele){
        let node = new Node(ele)
        if(!this.top){
            this.top = node
        }else{
            node.next = this.top
            this.top = node
        }
    }
    pop(){
        let poping = this.top
        this.top=this.top.next

    }
    peek(){
        console.log('top element= ',this.top.value)
    }
    print(){
        let curr = this.top
        while(curr){
            console.log(curr.value)
            curr = curr.next
        }
    }
}

let St = new Stack()
St.push(12)
St.push(1)
St.push(2)
St.push(123)
console.log(St)
St.peek()
St.print()
St.pop()
St.peek()
St.print()