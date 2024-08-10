export const InsertionSort = async (array, updateArray, delay) => {
    let arr = [...array];
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            updateArray([...arr], j + 1, j); // Highlight the swap
            await sleep(delay);
            j--;
        }
        arr[j + 1] = key;
        updateArray([...arr], j + 1, i); // Highlight the insertion
        await sleep(delay);
    }
    updateArray([...arr]); // Final update to show sorted array
};
