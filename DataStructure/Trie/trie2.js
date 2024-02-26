class Node{
    constructor(){
        this.children = {}
        this.isEndOfWord = false
    }

}

class Trie{
    constructor(){
       this.root = new Node()
    }

    insert(word){
        let curr = this.root
        for(let char of word){
            if(!curr.children[char]){
                curr.children[char] = new Node()
            }
            curr = curr.children[char]
        }
        curr.isEndOfWord = true
    }

    print(node){
        console.log()
    }
}