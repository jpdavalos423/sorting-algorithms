export const bubbleSort = async (array: any, setArray: any, delay = 100) => {
  let arr = array.slice();
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        setArray([...arr]);
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    }
  }
};

export const selectionSort = async (array: any, setArray: any, delay = 100) => {
  let arr = array.slice();
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      setArray([...arr]); // Update state to trigger re-render
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }
};
