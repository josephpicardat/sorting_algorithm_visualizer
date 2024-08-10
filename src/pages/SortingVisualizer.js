import { useState, useEffect, useContext } from 'react';
import Bar from '../components/Bar';
import { SortingContext } from '../components/SortingContext';
import { BubbleSort } from '../components/algorithms/BubbleSort';
import { QuickSort } from '../components/algorithms/QuickSort';
import { MergeSort } from '../components/algorithms/MergeSort';
import { InsertionSort } from '../components/algorithms/InsertionSort';
import { HeapSort } from '../components/algorithms/HeapSort';
import './SortingVisualizer.css';

const sortingAlgorithms = {
    'Bubble Sort': BubbleSort,
    'Quick Sort': QuickSort,
    'Merge Sort': MergeSort,
    'Insertion Sort': InsertionSort,
    'Heap Sort': HeapSort,
};

const SortingVisualizer = () => {
    const [values, setValues] = useState([]);
    const [activeIndices, setActiveIndices] = useState([]);
    const { preferences, updatePreferences } = useContext(SortingContext);

    const generateRandomValues = (numBars) => {
        // Generate values proportionally for a staircase effect
        const arr = Array.from(
            { length: numBars },
            (_, i) => 50 + (300 / numBars) * i
        );

        // Shuffle the array to randomize the initial positions
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
        }

        return arr;
    };

    useEffect(() => {
        let values = generateRandomValues(preferences.size);
        setValues(values);
    }, [preferences.size, preferences.sortingOption, preferences.speed]);

    const updateArray = (newArray, index1 = null, index2 = null) => {
        setValues(newArray);
        if (index1 !== null && index2 !== null) {
            setActiveIndices([index1, index2]); // Highlight the bars being compared/moved
        } else {
            setActiveIndices([]); // Clear active indices
        }
    };

    const handleSort = async () => {
        const algorithm = sortingAlgorithms[preferences.sortingOption];
        if (algorithm) {
            await algorithm(values, updateArray, preferences.speed); // Call the sorting function with update callback
        }
        updatePreferences({ start: false });
    };

    const handleShuffle = () => {
        // Get an array of the algorithm names (keys)
        const algorithmNames = Object.keys(sortingAlgorithms);

        // Pick a random algorithm
        const shuffledAlgorithmName =
            algorithmNames[Math.floor(Math.random() * algorithmNames.length)];

        // Generate a new random array of values
        const shuffledSize = Math.floor(Math.random() * (50 - 10 + 1)) + 10;

        updatePreferences({
            shuffle: false,
            sortingOption: shuffledAlgorithmName,
            size: shuffledSize,
        });
    };

    useEffect(() => {
        if (preferences.start) {
            handleSort();
        }
    }, [preferences.start]);

    useEffect(() => {
        if (preferences.shuffle) {
            handleShuffle();
        }
    }, [preferences.shuffle]);

    return (
        <div className='barContainer'>
            {values.map((value, idx) => (
                <Bar
                    key={idx}
                    height={value}
                    isActive={activeIndices.includes(idx)}
                />
            ))}
        </div>
    );
};

export default SortingVisualizer;
