function merge(left, right) {
  let merged = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      merged.push(left[leftIndex]);
      leftIndex++;
    } else {
      merged.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return merged.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);

  // Recursively split the array
  const left = mergeSort(arr.slice(0, middle));
  const right = mergeSort(arr.slice(middle));

  // Merge sorted halves
  return merge(left, right);
}

module.exports = { merge, mergeSort };
