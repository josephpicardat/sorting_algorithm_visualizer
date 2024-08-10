export const HeapSort = async (array, updateArray, delay) => {
    let arr = [...array];
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    const heapify = async (n, i) => {
        let largest = i;
        let left = 2 * i + 1;
        let right = 2 * i + 2;

        if (left < n && arr[left] > arr[largest]) {
            largest = left;
        }

        if (right < n && arr[right] > arr[largest]) {
            largest = right;
        }

        if (largest !== i) {
            [arr[i], arr[largest]] = [arr[largest], arr[i]];
            updateArray([...arr], i, largest); // Highlight the swap
            await sleep(delay);
            await heapify(n, largest);
        }
    };

    const heapSort = async () => {
        let n = arr.length;

        for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
            await heapify(n, i);
        }

        for (let i = n - 1; i > 0; i--) {
            [arr[0], arr[i]] = [arr[i], arr[0]];
            updateArray([...arr], 0, i); // Highlight the swap
            await sleep(delay);
            await heapify(i, 0);
        }
    };

    await heapSort();
    updateArray([...arr]); // Final update to show sorted array
};
