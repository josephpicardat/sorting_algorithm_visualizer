import SortingVisualizer from './pages/SortingVisualizer';
import Controls from './pages/Controls';
import './App.css';

function App() {
    return (
        <div className='App'>
            <h1 className='Title'>Sorting Algorithm Visualizer</h1>
            <Controls />
            <SortingVisualizer />
        </div>
    );
}

export default App;
