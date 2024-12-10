function bubbleSort(nums) {
    for (i = 0; i < nums.length; i++){
        for (j = i + 1; j < nums.length; j++){
            if (nums[i] > nums[j]){
                let temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp;
            }
        }
    }
    // console.log(nums);
    return nums;
}
// bubbleSort([5,4,1,2,7]);
module.exports = bubbleSort;