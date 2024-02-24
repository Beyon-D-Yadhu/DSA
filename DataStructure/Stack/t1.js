//with array method
class Stack{
    constructor(){
        this.items = []
    }

    push(value){
        this.items.push(value)
    }
    pop(){
        return this.items.pop()
    }
    peek(){
        console.log(this.items[this.items.length-1])
    }
    
}

let st = new Stack()
st.push(12)
st.push(12)
st.push(12)
st.push(12)
