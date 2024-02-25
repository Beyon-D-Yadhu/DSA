class maxHeap{
    constructor(){
        this.list = []
    }

    heapPush(value){
        this.list.push(value)
        if(this.list.length>1){
            this.heapifyUp()
        }
    }
    heapifyUp(){
        let lIndex = this.list.length-1
        while(true){
            let parentIndex = Math.floor((lIndex-1)/2)
            if(this.list[parentIndex]<this.list[lIndex]){
                [this.list[parentIndex],this.list[lIndex]] = [this.list[lIndex],this.list[parentIndex]]
                lIndex = parentIndex
            }else{
                break;
            }
        }
    }
    heapPop(){
        if(this.list.length<2){
            this.list = []
        }else{
            this.list[0] = this.list[this.list.length-1]
            this.list.pop()
            this.heapifyDown()
        }
    }
    heapifyDown(){
        let init = 0
        while(2*init+1 < this.list.length){
            let left = 2*init+1;
            let right = 2*init+2
            if(right<this.list.length && this.list[right]>this.list[left]){
                if(this.list[init]<this.list[right]){
                    [this.list[init],this.list[right]]=[this.list[right],this.list[init]]
                    init = right
                }else{break;}
            }else{
                if(this.list[init]<this.list[left]){
                    [this.list[init],this.list[left]]=[this.list[left],this.list[init]]
                    init = left
                }else{break;}
            }
        }
    }
    print(){
        console.log(this.list)
    }
}

let heap = new maxHeap()

heap.heapPush(5)
heap.heapPush(3)
heap.heapPush(34)
heap.heapPush(56)
heap.heapPush(578)
heap.heapPush(590)
heap.heapPush(23)
heap.heapPush(13)

console.log('after putting elements');
heap.print()

heap.heapPop()
console.log('after poping out');
heap.print()
