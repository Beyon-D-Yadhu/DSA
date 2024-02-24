//upcoming the collision

class HashTable{
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }

    hash(key){
        let total = 0
        for(let i=0; i<key.length;i++){
            total += key.charCodeAt(i)
        }
        return total % this.size
    }

    set(key,value){
        let index = this.hash(key)
        if(this.table[index]){
            for(let i=0; i<this.table[index].length; i++){
                if(this.table[index][i][0] === key){
                    this.table[index][i][1] = value
                    return
                }
            }
            this.table[index].push([key,value])
        }else{
            this.table[index] = []
            this.table[index].push([key,value])
        }

    }

    get(key) {
        const target = this.hash(key);
        if (this.table[target]) {
          for (let i = 0; i < this.table.length; i++) {
            if (this.table[target][i][0] === key) {
              return this.table[target][i][1];
            }
          }
        }
        return undefined;
      }

      remove(key) {
        const index = this.hash(key);
      
        if (this.table[index] && this.table[index].length) {
          for (let i = 0; i < this.table.length; i++) {
            if (this.table[index][i][0] === key) {
              this.table[index].splice(i, 1);
              this.size--;
              return true;
            }
          }
        } else {
          return false;
        }
      }

      display() {
        this.table.forEach((values, index) => {
          const chainedValues = values.map(
            ([key, value]) => `[ ${key}: ${value} ]`
          );
          console.log(`${index}: ${chainedValues}`);
        });
      }
}
const ht = new HashTable(45);

ht.set("France", 111);
ht.set("Spain", 150);
ht.set("ǻ", 192);

ht.display();

ht.remove("Spain");
ht.display();
