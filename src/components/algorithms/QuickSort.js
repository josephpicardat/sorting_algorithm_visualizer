export const QuickSort = async (array, updateArray, delay) => {
    let arr = [...array];
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    const partition = async (low, high) => {
        let pivot = arr[high];
        let i = low - 1;

        for (let j = low; j < high; j++) {
            if (arr[j] < pivot) {
                i++;
                [arr[i], arr[j]] = [arr[j], arr[i]];
                updateArray([...arr], i, j); // Highlight the swap
                await sleep(delay);
            }
        }
        [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
        updateArray([...arr], i + 1, high); // Highlight the swap
        await sleep(delay);
        return i + 1;
    };

    const quickSortRecursive = async (low, high) => {
        if (low < high) {
            let pi = await partition(low, high);
            await quickSortRecursive(low, pi - 1);
            await quickSortRecursive(pi + 1, high);
        }
    };

    await quickSortRecursive(0, arr.length - 1);
    updateArray([...arr]); // Final update to show sorted array
};
