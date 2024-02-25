class Node{
    constructor(){
        this.isEndOfWord = false
        this.children = {}
    }
}

class Trie{
    constructor(){
        this.root = new Node()
    }
    insert(word){
        let curr = this.root
        for(let char of word){
            if(curr.children[char]===undefined){
                curr.children[char] = new Node()
            }
            curr = curr.children[char]
        }
        curr.isEndOfWord = true
    }
    search(word){
        let curr = this.root
        for(let char of word){
            if(curr.children[char] === undefined){
                return false
            }
            curr = curr.children[char]
        }
        return curr.isEndOfWord
    }
    delete(word){
        if(!this.root.children){
            return null
        }
        let nodeToDelete
        let current = this.root
        for(let char of word){
            if(current.children[char] === undefined){
                return 'no such words'
            }else{
                if(Object.keys(current.children)>1){
                    nodeToDelete = current
                }
            }
            current = current.children[char]
        }
        if(!nodeToDelete){
            // delete this.root.children.word[0]
            return 'deleted'
        }

    }
    // dfs(node){
    //     console.log(node.value)
    //     this.dfs(node.children[node.obj.key])
    // }
}
let tri = new Trie()
// tri.insert('car')
tri.insert('can')
tri.insert('car')
// console.log(tri.delete('can'))
console.log(tri.search('vala'))
console.log(tri.search('car'))