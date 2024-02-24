function Queue() {
    this.items = [];
}

Queue.prototype.enqueue = function(value) {
    this.items.push(value);
}

Queue.prototype.dequeue = function() {
    this.items.shift();
}

Queue.prototype.peek = function() {
    console.log('First Element = ',this.items[0]);
}

Queue.prototype.print = function() {
    console.log('Queue = ', this.items);
}

let q1 = new Queue();
q1.enqueue(3);
q1.enqueue(87);
q1.enqueue(7);
q1.enqueue(66);
q1.enqueue(5);
q1.enqueue(2);
q1.print();
q1.dequeue()
q1.peek()
q1.print()