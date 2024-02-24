class minHeap{
    constructor(){
        this.item = []
    }

    heapPush(value){
        this.item.push(value)
        if(this.item.length<2){
            return
        }else{
            this.heapifyUp()
        }
    }

    heapifyUp(){
        let lIndex = this.item.length-1
        while(true){
            let parant = Math.floor((lIndex-1)/2)
            if(this.item[lIndex]<this.item[parant]){
                [this.item[lIndex],this.item[parant]] = [this.item[parant],this.item[lIndex]]
                lIndex = parant
            }else{
                break;
            }
        }
        return
    }

    heapPop(){
        if(this.item.length<2){
            this.item = []
            return
        }
        this.item[0] = this.item[this.item.length - 1]
        this.item.pop()
        this.heapifyDown()
    }
    
    heapifyDown(){
        for(let i=0;i<this.item.length;i++){
            let left = 2*i+1
            let right = 2*i+2
            if(this.item[left]<this.item[right]){
                if(left<=this.item.length-1 && this.item[left]<this.item[i]){
                    [this.item[left],this.item[i]]=[this.item[i],this.item[left]]
                    i = left-1
                }else{
                    break;
                }
            }else{
                if(right<=this.item.length-1 && this.item[right]<this.item[i]){
                    [this.item[i],this.item[right]]=[this.item[right],this.item[i]]
                    i = right-1
                }else{
                    break;
                }
            }
        }
    }

    print(){
        console.log(this.item)
    }
}

let heap = new minHeap()

heap.heapPush(1)
heap.heapPush(13)
heap.heapPush(43)
heap.heapPush(21)
heap.heapPush(54)
heap.heapPush(42)
heap.heapPush(37)
heap.heapPush(20)
heap.heapPush(10)
console.log('aftrer insertion');
heap.print()

console.log('after popingout');
heap.heapPop()
heap.print()
