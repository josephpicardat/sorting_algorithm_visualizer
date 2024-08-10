import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const SortingContext = createContext();

const SortingProvider = ({ children }) => {
    // Initialize state with default preferences
    const [preferences, setPreferences] = useState({
        sortingOption: 'Bubble Sort',
        size: 10,
        start: false,
        speed: 100,
        shuffle: false,
        sorting: false,
    });

    // Function to update preferences
    const updatePreferences = (newPreferences) => {
        setPreferences((prevPreferences) => ({
            ...prevPreferences,
            ...newPreferences,
        }));
    };

    return (
        <SortingContext.Provider value={{ preferences, updatePreferences }}>
            {children}
        </SortingContext.Provider>
    );
};

SortingProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default SortingProvider;
