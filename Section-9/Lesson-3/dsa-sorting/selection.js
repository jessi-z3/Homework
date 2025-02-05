/* 
- Assign the first element to be the smallest value (this is called the minimum). It does not matter right now if this actually the smallest value in the array.
- Compare this item to the next item in the array until you find a smaller number.
- If a smaller number is found, designate that smaller number to be the new “minimum” and continue until the end of the array.
- If the “minimum” is not the value (index) you initially began with, swap the two values. You will now see that the beginning of the array is in the correct order (similar to how after the first iteration of bubble sort, we know the rightmost element is in its correct place).
- Repeat this with the next element until the array is sorted.
*/

function selectionSort(arr) {
  if (arr.length > 1) {
    let min = arr[0];
    for (i = 1; i <= arr.length; i++) {
      for (comparer = 0; comparer <= arr.length; comparer++) {
        console.log(arr);
        console.log("Next element in array is", arr[i]);
        if (arr[i] < arr[comparer]) {
          console.log(
            "The item in the array is smaller than one it's compared to",
            arr[comparer]
          );
          if (arr[i] < min) {
            min = arr[i];
            console.log("changed the minimun to", min);
          }
          let temp = arr[i];
          arr[i] = arr[comparer];
          arr[comparer] = temp;
          console.log("switched places with the comparing index");
        }
        console.log("_____________");
      }
    }
    return arr;
  } else {
    return arr;
  }
}

module.exports = selectionSort;
