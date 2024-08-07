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

export const mergeSort = async (
  array: number[],
  setArray: React.Dispatch<React.SetStateAction<number[]>>,
  delay: number = 100
) => {
  const merge = async (
    arr: number[],
    left: number,
    mid: number,
    right: number
  ) => {
    let n1 = mid - left + 1;
    let n2 = right - mid;

    let L = arr.slice(left, left + n1);
    let R = arr.slice(mid + 1, mid + 1 + n2);

    let i = 0,
      j = 0,
      k = left;
    while (i < n1 && j < n2) {
      if (L[i] <= R[j]) {
        arr[k++] = L[i++];
      } else {
        arr[k++] = R[j++];
      }
    }

    while (i < n1) {
      arr[k++] = L[i++];
    }

    while (j < n2) {
      arr[k++] = R[j++];
    }

    // Update state to trigger re-render after merging is complete
    setArray([...arr]);
    await new Promise((resolve) => setTimeout(resolve, delay));
  };

  const mergeSortRecursive = async (
    arr: number[],
    left: number,
    right: number
  ) => {
    if (left >= right) return;
    let mid = Math.floor((left + right) / 2);
    await mergeSortRecursive(arr, left, mid);
    await mergeSortRecursive(arr, mid + 1, right);
    await merge(arr, left, mid, right);
  };

  let arr = array.slice();
  await mergeSortRecursive(arr, 0, arr.length - 1);
};
