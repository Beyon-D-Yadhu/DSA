//Stack using array inside an object

class Stack{
    constructor(){
        this.items = []
    }
    push(value){
        this.items.push(value)
    }
    pop(){
        this.items.pop()
    }
    peek(){
        console.log(this.items[this.items.length-1])
    }
    print(){
        console.log(this.items)
    }
}

let stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
console.log(stack)