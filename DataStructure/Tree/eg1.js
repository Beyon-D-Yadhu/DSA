//create a binary tree

class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null
    }
    isEmpty(){
        return this.root === null
    }
    insert(value){
        let node = new Node(value)
        if(this.isEmpty()){
            this.root = node
        }else{
            this.insertNode(this.root,node)
        }
    }
    insertNode(root,node){
        if(node.value<root.value){
            if(!root.left){
                root.left = node
            }else{
                this.insertNode(root.left,node)
            }
        }else{
            if(!root.right){
                root.right = node
            }else{
                this.insertNode(root.right,node)
            }
        }
    }
    searchOnBst(value){
        return this.search(this.root,value)
    }
    search(root,value){
        if(!root){
            return false
        }else{
            if(root.value == value){
                return true
            }else if(value<root.value){
                return this.search(root.left,value)
            }else{
                return this.search(root.right,value)
            }
        }
    }
    preOrder(root){
        if(root){
            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }
    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value)
            this.inOrder(root.right)
        }
    }
    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value)
        }
    }
    BFStraversal(){
        const queue = []
        queue.push(this.root)
        while(queue.length){
            let curr = queue.shift()
            console.log(curr.value)
            if(curr.left)queue.push(curr.left)
            if(curr.right)queue.push(curr.right)
        }
    }
    //min node
    min(root){
        if(!root)return null
        if(!root.left){
            return root.value
        }else{
            return this.min(root.left)
        }
    }
    max(root){
        if(!root)return null
        if(!root.right){
            return root.value
        }else{
            return this.max(root.right)
        }
    }

}

let BST = new BinarySearchTree()
BST.insert(10)
BST.insert(5)
BST.insert(15)
BST.insert(6)
BST.insert(2)


console.log(BST.searchOnBst(5))
console.log(BST.searchOnBst(6))
console.log(BST.searchOnBst(2))
console.log(BST.searchOnBst(13))

console.log('------------------------------');
console.log('DFS');
console.log('preorder');
BST.preOrder(BST.root)
console.log('inOrder');
BST.inOrder(BST.root)
console.log('postOrder');
BST.postOrder(BST.root)
console.log('------------------------------');
console.log('Breadth First Search');
BST.BFStraversal()
console.log('----------------------');
// console.log(BST.min(BST.root))
// console.log(BST.max(BST.root))
