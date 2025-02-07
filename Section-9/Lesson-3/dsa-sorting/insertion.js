function insertionSort(arr, index = 1) {
  // Base case: If we've reached the end of the array, return it
  if (index >= arr.length) {
    return arr;
  }

  // Get the current element to insert
  let currentValue = arr[index];
  let position = index - 1;

  // Shift elements to the right until we find the correct spot
  while (position >= 0 && arr[position] > currentValue) {
    arr[position + 1] = arr[position];
    position--;
  }

  // Insert the element in the correct position
  arr[position + 1] = currentValue;

  // Recursively call insertionSort for the next element
  let sorted = insertionSort(arr, index + 1);
  return sorted;
}

module.exports = { insertionSort };
