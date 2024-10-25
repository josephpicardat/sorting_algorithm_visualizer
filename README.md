# Sorting Algorithm Visualizer

## Overview

This project is a visualizer for various sorting algorithms built with React. It helps users understand how different sorting algorithms work by providing a visual representation of the sorting process. Users can select different sorting algorithms, adjust parameters such as the number of bars and the sorting speed, and view the sorting process in real time. Additionally, a wave effect is applied to the bars once the sorting is complete to enhance the visual appeal.

## Table of Contents

-   [Features](#features)
-   [Getting Started](#getting-started)
-   [Project Structure](#project-structure)
-   [Sorting Algorithms](#sorting-algorithms)
-   [Usage](#usage)
-   [Technologies](#technologies)
-   [Contributing](#contributing)
-   [Contact Me](#contact-me)
-   [License](#license)

## Features

-   Sorting Algorithms: Includes Bubble Sort, Quick Sort, Merge Sort, Insertion Sort, and Heap Sort.
-   Interactive Controls: Allows users to select sorting algorithms, adjust the number of bars, and control sorting speed.
-   Visual Feedback: Provides a visual representation of the sorting process with color changes to highlight active bars.
-   Randomization: The initial bar heights are randomized, and a wave effect is applied after sorting completes.
-   Responsive Design: Adapts to different screen sizes and provides a smooth user experience.

## Getting Started

To run the project locally, follow these steps:

### Prerequisites

Node.js: Make sure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/sorting_algorithm_visualizer.git
    cd sorting_algorithm_visualizer
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

### Running the Project

1. **Start the development server:**

    ```bash
    npm start
    ```

2. **Open your browser and navigate to:** [http://localhost:3000](http://localhost:3000)

## Project Structure

-   src/components/: Contains reusable components, such as Bar and the sorting algorithms.
-   src/components/algorithms/: Contains implementations of sorting algorithms.
-   src/pages/: Contains main pages like SortingVisualizer and Controls.
-   src/SortingContext.js: Contains context for managing sorting preferences.
-   src/App.js: Main application file that sets up routing and includes the main components.
-   src/index.js: Entry point for the React application.

## Sorting Algorithms

This project includes several sorting algorithms. Below is a brief overview of each algorithm, including its time complexity and a sample implementation.

### 1. Bubble Sort

**Description**: Bubble Sort is a simple comparison-based sorting algorithm. It repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The process is repeated until the list is sorted.

**Time Complexity**:

-   Best Case: O(n) (when the array is already sorted)
-   Average Case: O(n²)
-   Worst Case: O(n²)

### 2. Quick Sort

**Description**: Quick Sort is a divide-and-conquer algorithm. It picks an element as a pivot and partitions the array around the pivot. The pivot is chosen so that elements less than the pivot come before it and elements greater come after it.

**Time Complexity**:

-   Best Case: O(n log n)
-   Average Case: O(n log n)
-   Worst Case: O(n²) (when the pivot is the smallest or largest element)

### 3. Merge Sort

**Description**: Description: Merge Sort is a divide-and-conquer algorithm that divides the array into halves, recursively sorts each half, and then merges the sorted halves back together. It is known for its efficiency and stability.

**Time Complexity**:

-   Best Case: O(n log n)
-   Average Case: O(n log n)
-   Worst Case: O(n log n)

### 4. Insertion Sort

**Description**: Description: Insertion Sort is a simple comparison-based sorting algorithm that builds the final sorted array one item at a time. It is much less efficient on large lists than more advanced algorithms such as Quick Sort.

**Time Complexity**:

-   Best Case: O(n) (when the array is already sorted)
-   Average Case: O(n²)
-   Worst Case: O(n²)

### 5. Heap Sort

**Description**: Description: Heap Sort is a comparison-based sorting algorithm that uses a binary heap data structure. It first builds a max heap from the input data and then repeatedly extracts the maximum element from the heap and reconstructs the heap until the array is sorted.

**Time Complexity**:

-   Best Case: O(n log n)
-   Average Case: O(n log n)
-   Worst Case: O(n log n)

## Usage

-   Select Algorithm: Choose a sorting algorithm from the dropdown menu.
-   Adjust Size: Use the slider to set the number of bars to visualize.
-   Adjust Speed: Use the slider to set the speed of sorting.
-   Visualize Sorting: Click the "Visualize" button to start sorting.
-   Shuffle: Click the "Shuffle" button to randomize the bar heights and select a new algorithm.

## Technologies

-   React: The library used for building the user interface.
-   Material-UI: Provides UI components and styling.

## Contributing

- This project was created as a self-made development application. If you are interested in contributing, please go and contact me via LinkedIn listed below.

## Contact Me

### LinkedIn
-   [Joseph Picardat](https://www.linkedin.com/in/josephpicardat/)

## License

![License](https://img.shields.io/badge/License-MIT-yellow.svg)
(https://opensource.org/licenses/MIT)

Copyright 2024 Joseph Picardat

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
