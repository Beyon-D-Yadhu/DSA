//compare BST are same or not

class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySeachTree{
    constructor(){
        this.root = null
    }

    addNode(value){
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
                this.insertValue(root.right, node)
            }
        }
    }
    checkBsts(root1,root2){
        if(!root1 && !root2)return true
        if(root1.value!==root2.value){
            return false
        }
        return root1.value === root2.value && this.checkBsts(root1.left,root2.left) && this.checkBsts(root1.right,root2.right)
    }

}

let bst1 = new BinarySeachTree()
let bst2 = new BinarySeachTree()
bst1.addNode(1)
bst1.addNode(2)

bst2.addNode(2)




console.log(bst1.checkBsts(bst1.root,bst2.root))