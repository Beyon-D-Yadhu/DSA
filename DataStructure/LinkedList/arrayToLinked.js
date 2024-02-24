class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
    }
    arrayToLinked(arr){
        this.head = new Node(arr[0])
        let curr = this.head
        for(let i=1; i<arr.length; i++){
            curr.next = new Node(arr[i])
            curr = curr.next
        }
    }
    printLinked(){
        let curr = this.head
        while(curr){
            console.log(curr.value)
            curr = curr.next
        }
    }
    insert(old,newValue){
        let curr = this.head
        if(!curr){
            return
        }
        if(curr == old){
            let node1 = new Node(newValue)
            this.head = node1
            node1.next = curr
            let node2 = new Node(newValue)
            node2.next = curr.next
            curr.next = node2
        }else{
            while (curr && curr.next) {
                if (curr.next.value === old) {
                    let newNodeBefore = new Node(newValue);
                    newNodeBefore.next = curr.next;
                    curr.next = newNodeBefore;
    
                    let newNodeAfter = new Node(newValue);
                    newNodeAfter.next = newNodeBefore.next.next;
                    newNodeBefore.next.next = newNodeAfter;
    
                    return;
                }
    
                curr = curr.next;
            }
        }
    }
}

let ll1 = new LinkedList()
ll1.arrayToLinked([1,2,5,4,34,65,21,67])
ll1.printLinked()
ll1.insert(34,10)
ll1.printLinked()