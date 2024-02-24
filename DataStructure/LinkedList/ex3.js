//create an empty linked list
class Node{
    constructor(value){
        this.data = value
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.size =0
    }

    append(data){
        let node = new Node(data)
        if(!this.head){
            this.head = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }
    prepend(data){
        let node = new Node(data)
        if(!this.head){
            this.head = node
        }else{
            let prev = this.head
            while(prev.next){
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }
    
    print(){
        if(!this.head){
            return null
        }else{
            let str = ''
            let curr = this.head
            while(curr){
                str += `${curr.data} `
            }
            console.log(str)
        }
    }
}

let ll = new LinkedList()
let ll2 = new LinkedList()
ll.append(54)

let list2 = new LinkedList()
let arr = [1,2,5,4,6]
for(i=0;i<arr.length;i++){
    list2.prepend(arr[i])
}
list2.print()
console.log(list2)