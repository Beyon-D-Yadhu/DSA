// Given an array sort the array asecnding order
function bubbleIncreaseOrder(arr) {
    let swap
  do {
    swap = false;

    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        swap = true;
        let temp;
        temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
  } while (swap);
  return arr
}

console.log(bubbleIncreaseOrder([1,2,5,3,56,34,12]));