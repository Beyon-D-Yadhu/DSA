//create a basic tree

function Node(value){
    this.value = value
    this.left = null
    this.right = null
}
  
  const root = new Node(2)
  root.left = new Node(1)
  root.right = new Node(3)

//