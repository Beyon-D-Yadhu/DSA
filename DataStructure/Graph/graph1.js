class Graph{
    constructor(){
        this.adjacencyList = {}

    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = new Set()
        }
    }
    addEdge(vertex1,vertex2){
        if(!this.adjacencyList[vertex1]){
        this.addVertex(vertex1)
        }
        if(!this.adjacencyList[vertex1]){
        this.addVertex(vertex2)
        }
        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }

    //delete edge
    removeEdge(vertex1,vertex2){
        this.adjacencyList[vertex1].delete(vertex2)
        this.adjacencyList[vertex2].delete(vertex1)
    }

    //delete vertex
    removeVertex(vertex){
        for(let adjacent in this.adjacencyList[vertex]){
            this.removeEdge(vertex,adjacent)
        }
        delete this.adjacencyList[vertex]
    }

    //display vertex
    display(){
        for(let vertex in this.adjacencyList){
            console.log(vertex,' => ',[...this.adjacencyList[vertex]])
        }
    }
    bfs(start){
        let visited = {}
        let queue = [start]
        let result = []

        visited[start] = true

        while(queue.length){
            const currVertex = queue.shift()
            result.push(currVertex)
            for(let vertex of this.adjacencyList[currVertex]){
                if(!visited[vertex]){
                    visited[vertex] = true
                    queue.push(vertex)
                }
            }
        }
        return result
    }
    dfs(start){
        let stack = [start]
        let visted = {}
        let result = []
        while(stack.length){
            const currStack = stack.pop()
            if(!visted[currStack]){
                visted[currStack] = true
            }
            result.push(currStack)
            for(let vertex of this.adjacencyList[currStack]){
                if(!visted[vertex]){
                    stack.push(vertex)
                }
            }
        }
        return result
    }
}

let graph = new Graph()
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')
graph.addVertex('E')
graph.addVertex('F')
graph.addVertex('G')


graph.addEdge('A','B')
graph.addEdge('B','C')
graph.addEdge('A','D')
graph.addEdge('B','F')
graph.addEdge('B','E')
graph.addEdge('C','F')


// graph.display()


// console.log('---removing edges---')

// graph.removeEdge('A','B')
// graph.display()

// console.log('---removing vertex---')

// graph.removeVertex('B')
// graph.display()

// console.log(graph.bfs('A'));

console.log(graph.dfs('A'))