import './Bar.css';

const Bar = ({ height, isActive }) => {
    return (
        <div
            className='bar'
            style={{
                height: `${height}px`,
                backgroundColor: isActive ? '#1976d2' : '#ffffff',
            }}
        ></div>
    );
};

export default Bar;
