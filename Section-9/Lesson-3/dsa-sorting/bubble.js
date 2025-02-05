function bubbleSort(arr) {
  const n = arr.length;

  // Outer loop to go through all passes
  for (let i = 0; i < n - 1; i++) {
    // Inner loop to perform comparisons and swaps in the current pass
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap the elements
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

module.exports = bubbleSort;
