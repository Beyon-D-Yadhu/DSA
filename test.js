//trie search and insertion

const { nodeify } = require("promise")

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

    search(word){
        this.searchWord(word,this.root)
    }

    searchWord(word,root){
        
    }
}


insert(value){
    let node = new Node(value)
    if(!root){
        root = node
    }else{
        this.insertNode(root,node)
    }
}

insertNode(root,node){
    if(node.value>root.value){
        if(!root.right){
            root.right = node
        }else{
            insertNode(root.right,node)
        }
    }else{
        if(!root.left){
            root.left = node
        }else{
            insertNode(root.left,node)
        }
    }
}