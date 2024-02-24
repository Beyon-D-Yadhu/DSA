let a = {
    data:1,
}
let b ={
    data :2
}
a.next = b
a.previous = null
b.next = null
b.previous = a
let c = a
console.log(c)
// c = c.next
// console.log(c)
process.memoryUsage()