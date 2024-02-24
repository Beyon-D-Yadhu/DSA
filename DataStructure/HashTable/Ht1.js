//create a simple hashtable and use it

class HashTable{
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }

    //function to hash
    hash(key){
        let total = 0
        for(let i=0; i<key.length; i++){
            total += key.charCodeAt(i)
        }
        return total % this.size
    }

    set(key,value){
        let index = this.hash(key)
        this.table[index] = value
    }

    get(key){
        let index = this.hash(key)
        if(!this.table[index]){
            return null
        }
        return this.table[index]
    }
    remove(key){
        let index = this.hash(key)
        if(!this.table[index]) {
            console.log('no elements found, already null')
            return
        }
        this.table[index] = null
    }
    print(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(i,' = ',this.table[i])
            }
        }
    }
}

let table = new HashTable(13)

table.set('in','India')
table.set('pak','Pakistan')
table.set('ger','Germany')
table.set('us','America')
table.set('br','Britan')

table.print()

table.remove('pak')
table.remove('br')
table.get('in')
table.print()
