class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BST{
    constructor(){
        this.root = null
    }

    addValue(value){
        let node = new Node(value)
        if(!this.root){
            this.root = node
        }else{
            this.insertValue(this.root,node)
        }
    }

    insertValue(root,node){
        if(node.value<root.value){
            if(!root.left){
                root.left = node
            }else{
                this.insertValue(root.left,node)
            }
        }else{
            if(!root.right){
                root.right = node
            }else{
                this.insertValue(root.right,node)
            }
        }
    }

    //traversal
    //DFS
    inOrder(root){
        this.inOrder(root.left)
        console.log(root.value)
        this.inOrder(root.right)
    }
    postOrder(root){
        this.postOrder(root.left)
        this.postOrder(root.right)
        console.log(root.value)
    }

    preOrder(root){
        console.log(root.value)
        this.preOrder(root.left)
        this.preOrder(root.right)
    }
}