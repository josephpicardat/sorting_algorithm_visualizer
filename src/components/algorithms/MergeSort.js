export const MergeSort = async (array, updateArray, delay) => {
    let arr = [...array];
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    // Function to merge two halves
    const merge = async (start, mid, end) => {
        let left = arr.slice(start, mid);
        let right = arr.slice(mid, end);

        let i = 0,
            j = 0,
            k = start;

        while (i < left.length && j < right.length) {
            // Highlight the bars being compared
            updateArray([...arr], k, left[i] <= right[j] ? start + i : mid + j);

            if (left[i] <= right[j]) {
                arr[k++] = left[i++];
            } else {
                arr[k++] = right[j++];
            }

            await sleep(delay);
        }

        // Handle remaining elements
        while (i < left.length) {
            updateArray([...arr], k, start + i); // Highlight the index k and i
            arr[k++] = left[i++];
            await sleep(delay);
        }

        while (j < right.length) {
            updateArray([...arr], k, mid + j); // Highlight the index k and j
            arr[k++] = right[j++];
            await sleep(delay);
        }
    };

    // Recursive function for merge sort
    const mergeSortRecursive = async (start, end) => {
        if (start < end - 1) {
            let mid = Math.floor((start + end) / 2);

            await mergeSortRecursive(start, mid);
            await mergeSortRecursive(mid, end);

            await merge(start, mid, end);
        }
    };

    await mergeSortRecursive(0, arr.length);
    updateArray([...arr]); // Final update to show the fully sorted array
};
