let nums = [14, 25, 64, 35, 75, 5, 6, 36, 78];

const bubbleSort = (nums) => {
  for (let i = 0; i < nums.length - 1; i++) {
    let sorted = true;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
        sorted = false;
      }
    }
    if (sorted) {
      break;
    }
  }
  return nums;
};

console.log(bubbleSort(nums));
