let n1 = {
    data:10
}

let n2 = {
    data:20
}

n1.next = n2
console.log(n1)

//creation
//node
class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

//creation linkedlist
class LinkedList{
    constructor(){
        this.head = null
        this.size = 0
    }

    //insert first node
    insertFirst(value){
        let node = new Node(value)
        if(!this.head){
            this.head = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    //insert last node
    insertLast(value){
        let node = new Node(value)
        let current = this.head
        while(current.next){
            current = current.next
        }
        current.next = node
    }

    //insert at index
    insertAt(data,index){
        if(index<0 || index>this.size){
            console.log('Out of bounds')
            return
        }
            if(index == 0){
            return this.insertFirst(data)
        }else{
            let node = new Node(data)
            let previous = this.head
            for(let i=0; i<index-1; i++){
                previous = previous.next
            }
            node.next = previous.next
            previous.next = node
        }
    }



    //get at index

    //remove at index
    RemoveFrom(index){
        if(index<0 ||index>this.size-1){
            console.log('out of bounds')
            return
        }
        if(index==0){
            this.head = this.head.next
            this.size--
            return
        }
        let prev = this.head
        for(let i=0;i<index-1;i++){
            prev = prev.next
        }
        let remove = prev.next
        prev.next = remove.next
        this.size--
    }
    //clear list

    //Print list data
    printListData(){
        if(!this.head){
            console.log("it's empty")
        }else{
            let curr = this.head
            while(curr){
                console.log(curr.data)
                curr = curr.next
            }
            this.size++
        }
    }

}

let ll = new LinkedList()
ll.insertFirst(200)
ll.insertFirst(100)
ll.insertFirst(300)
ll.insertLast(15)
console.log(ll)
ll.insertAt(10,2)
ll.printListData()
ll.RemoveFrom(3)
ll.printListData()