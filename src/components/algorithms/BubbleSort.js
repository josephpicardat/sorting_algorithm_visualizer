export const BubbleSort = async (array, updateArray, delay) => {
    let arr = [...array];
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                updateArray([...arr], j, j + 1); // Pass active indices
                await sleep(delay); // Wait for the specified delay
            }
        }
    }
    updateArray([...arr]); // Final update to show sorted array
};
