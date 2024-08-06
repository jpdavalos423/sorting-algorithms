let nums = [14, 25, 64, 35, 75, 5, 6, 36, 78];

const selectionSort = (nums) => {
  for (let i = 0; i < nums.length - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[minIdx]) {
        minIdx = j;
      }
    }
    let temp = nums[minIdx];
    nums[minIdx] = nums[i];
    nums[i] = temp;
  }
  return nums;
};

console.log(selectionSort(nums));
