/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

function pivot(arr, starting = 0, ending = arr.length) {
  const originalPivotIndex = Math.ceil(ending / 2) - 1;
  let pivotIndex = originalPivotIndex;
  const pivotNumber = arr[originalPivotIndex];

  console.log("Original:", arr);
  console.log("Pivot:", pivotNumber);

  for (i = 0; i < ending; i++) {
    if (arr[starting] <= pivotNumber) {
      // the number should go the left of the pivot
      if (starting > pivotIndex) {
        // check that it needs to be moved
        let temp = arr[starting];
        // temporarily store it
        arr.splice(starting, 1);
        // remove it
        arr.unshift(temp);
        // add it back to the front
        pivotIndex++;
        // the pivot index increases
        if (arr[i] > pivotNumber) {
          starting++;
        }
        console.log("New:", arr);
      }
    } else {
      // the number should go to the right
      if (starting < pivotIndex) {
        // check that it needs to be moved
        let temp = arr[starting];
        // temporarily store it
        arr.splice(starting, 1);
        // remove it
        arr.push(temp);
        // add it back to the back
        pivotIndex--;
        // the pivot index decreases
        console.log("New:", arr);
      }
    }
  }
  console.log("_______________");
  return pivotIndex;
}

/*
quickSort accepts an array, left index, and right index
*/

function quickSort(arr, left, right) {
  while (left < right) {
    quickSort(pivot(arr, left, right));
    left++;
  }
}

module.exports = { pivot, quickSort };
