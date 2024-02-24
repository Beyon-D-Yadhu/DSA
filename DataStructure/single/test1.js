class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.size = 0
    }

    prepend(data){
        let node = new Node(data)
        node.next = this.head
        this.head = node
        this.size++
    }

    append(data){
        let node = new Node(data)
        let curr = this.head
        if(!curr){
            this.head = node
            return
        }
        while(curr.next){
            curr = curr.next
        }
        curr.next = node
        this.size++
    }

    removeAt(pos){
        if(pos<0 || !this.head ){
            return
        }
        let curr = this.head
        for(let i=0;i<pos-1;i++){
            if(!curr.next)return
            if(i==pos-2)break
            curr=curr.next
        }
        let remove = curr.next
        curr.next = remove.next
    }

    changeAt(pos,data){
        let node = new Node(data)
        if(pos<0 || !this.head)return
        let curr = this.head
        for(let i=0; i<pos-2; i++){
            if(!curr.next)return
            curr = curr.next
        }
        let change = curr.next
        curr.next = node
        node.next = change.next
    }

    inBw(pos,data){//Inbetween
        let node = new Node(data)
        if(pos<0|| !this.head)return
        if(pos==0){
            this.prepend(data)
        }
        let bef = this.head
        for(let i=0;i<pos-2;i++){
            if(!bef.next)return
            bef = bef.next
        }
        let af = bef.next
        bef.next = node
        node.next = af
    }

    befNaf(target,data){//before and after
        let n1 = new Node(data)
        let n2 = new Node(data)
        if(!this.head)return
        let curr = this.head
        for(let i = 0 ;curr.next.value !== target; i++){
            curr = curr.next
        }
        let found = curr.next
        n1.next = found
        curr.next = n1
        n2.next = found.next
        found.next = n2
    }

    arrInsert(arr){
        this.head = new Node(arr[0])
        let curr = this.head
        for(let i=1;i<arr.length;i++){
            curr.next = new Node(arr[i])
            curr =curr.next
        }
    }

    print(){
        let curr = this.head
        let str = ''
        while(curr){
            str+=`${curr.value} `
            curr = curr.next
        }
        console.log(str)
    }

}

let ll = new LinkedList()
ll.arrInsert([1,2,3,4,5,6])
ll.print()
ll.append(5)
ll.prepend(10)
ll.removeAt(4)
ll.changeAt(3,5)
ll.print()

//2873