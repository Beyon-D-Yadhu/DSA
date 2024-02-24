//Descending

class MergeSort {
  pass(arr) {
    return this.unwind(arr);
  }
  unwind(arr) {
    if (arr.length < 2) return arr;
    let middle = Math.floor(arr.length / 2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle);
    return this.merge(this.unwind(left), this.unwind(right));
  }
  merge(left, right) {
    let sorted = [];
    while (left.length && right.length) {
      if (left[0] > right[0]) {
        sorted.push(left.shift());
      } else {
        sorted.push(right.shift());
      }
    }
    return [...sorted, ...left, ...right];
  }
}
let array = [1, 2, 4, 3, 678, 232, 12, 34, 15];
let Ms = new MergeSort();
let res = Ms.pass(array);
console.log(res);
