function merge(arr1, arr2) {
    const newArray = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length){
        if (arr1[i] < arr2[j]){
            newArray.push(arr1[i]);
            i++;
        } else {
            newArray.push(arr2[j])
            j++;
        }
    }
    while( i < arr1.length){
        newArray.push(arr1[i]);
        i++;
    }
    while(j < arr2.length){
        newArray.push(arr2[j]);
        j++;
    }
    return newArray;
}

function mergeSort(arr) {
    if (arr.length <= 1){ return arr; }
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    return merge(left, right)
}

module.exports = { merge, mergeSort};