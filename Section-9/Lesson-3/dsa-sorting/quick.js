/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/
function pivot(arr, start = 0, end = arr.length - 1) {
  let pivotValue = arr[start];
  let swapIndex = start;

  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < pivotValue) {
      swapIndex++;
      [arr[swapIndex], arr[i]] = [arr[i], arr[swapIndex]]; // Swap elements
    }
  }
  [arr[start], arr[swapIndex]] = [arr[swapIndex], arr[start]]; // Move pivot to correct place

  return swapIndex;
}

// function pivot(arr, starting = 0, ending = arr.length - 1) {
//   const originalPivotIndex = 0;
//   let pivotIndex = originalPivotIndex;
//   const pivotNumber = arr[originalPivotIndex];

//   for (i = starting + 1; i <= ending; i++) {
//     if (arr[i] < pivotNumber) {
//       // the number should go the left of the pivot
//       if (i > pivotIndex) {
//         // check that it needs to be moved
//         let temp = arr[i];
//         // temporarily store it
//         arr.splice(i, 1);
//         // remove it
//         arr.unshift(temp);
//         // add it back to the front
//         pivotIndex++;
//         // the pivot index increases
//         console.log("New:", arr);
//       }
//     } else {
//       // the number should go to the right
//       if (i <= pivotIndex) {
//         // check that it needs to be moved
//         let temp = arr[i];
//         // temporarily store it
//         arr.splice(i, 1);
//         // remove it
//         arr.push(temp);
//         // add it back to the back
//         pivotIndex--;
//         // the pivot index decreases
//         console.log("New:", arr);
//       }
//     }
//   }
//   console.log("Final:", arr);
//   console.log("_______________");
//   return pivotIndex;
// }

/*
quickSort accepts an array, left index, and right index
*/

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right); // Partition and get the pivot index

    quickSort(arr, left, pivotIndex - 1); // Recursively sort left half
    quickSort(arr, pivotIndex + 1, right); // Recursively sort right half
  }
  return arr;
}

module.exports = { pivot, quickSort };
