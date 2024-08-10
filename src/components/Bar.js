import './Bar.css';

const Bar = ({ height, isActive, isWaving, index }) => {
    // console.log(isWaving);
    const truthing = isWaving.includes(index);
    return (
        <div
            className={`bar ${truthing ? 'active' : ''}`}
            style={{
                height: `${height}px`,
                backgroundColor: isActive || truthing ? '#1976d2' : '#ffffff',
                // transform: truthing ? 'scaleY(1.1)' : 'scaleY(1)',
            }}
        ></div>
    );
};

export default Bar;
