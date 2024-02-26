function heapSort(arr) {
    buildMaxHeap(arr);
    for (let i = arr.length - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapify(arr, 0, i);
    }

    return arr;
}

function buildMaxHeap(arr) {
    const n = arr.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, i, n);
    }
}

function heapify(arr, index, heapSize) {
    const left = 2 * index + 1;
    const right = 2 * index + 2;
    let largest = index;

    if (left < heapSize && arr[left] > arr[largest]) {
        largest = left;
    }
    if (right < heapSize && arr[right] > arr[largest]) {
        largest = right;
    }
    if (largest !== index) {
        [arr[index], arr[largest]] = [arr[largest], arr[index]];
        heapify(arr, largest, heapSize);
    }
}
const arr = [12, 11, 13, 5, 6, 7];
console.log("Original array:", arr);
console.log("Sorted array:", heapSort(arr));
