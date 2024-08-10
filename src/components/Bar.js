import './Bar.css';

const Bar = ({ height, isActive, isWaving, index }) => {
    let truthing;
    if (isWaving) {
        truthing = isWaving.includes(index);
    }
    return (
        <div
            className={`bar ${truthing ? 'active' : ''}`}
            style={{
                height: `${height}px`,
                backgroundColor: isActive || truthing ? '#1976d2' : '#ffffff',
            }}
        ></div>
    );
};

export default Bar;
