import { useContext } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { SortingContext } from '../components/SortingContext';
import './Controls.css';

const Controls = () => {
    const { preferences, updatePreferences } = useContext(SortingContext);

    const handleChange = (key, value) => {
        updatePreferences({ [key]: value });
    };

    return (
        <Box
            sx={{
                width: '75%',
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <Stack
                spacing={1}
                direction='row'
                sx={{
                    width: '40%',
                    display: 'flex',
                    justifyContent: 'space-evenly',
                }}
                alignItems='center'
            >
                <FormControl
                    variant='standard'
                    sx={{
                        width: '220px',
                        color: 'white',
                        height: '100%',
                    }}
                >
                    <NativeSelect
                        labelId='type'
                        id='selected'
                        value={preferences.sortingOption}
                        onChange={(event) =>
                            handleChange('sortingOption', event.target.value)
                        }
                        sx={{
                            color: 'white',
                            border: 'transparent 1px',
                            borderRadius: 1,
                            backgroundColor: '#1976d2',
                            textAlign: 'center',
                        }}
                    >
                        <MenuItem value={'Bubble Sort'}>Bubble Sort</MenuItem>
                        <MenuItem value={'Quick Sort'}>Quick Sort</MenuItem>
                        <MenuItem value={'Merge Sort'}>Merge Sort</MenuItem>
                        <MenuItem value={'Insertion Sort'}>
                            Insertion Sort
                        </MenuItem>
                        <MenuItem value={'Heap Sort'}>Heap Sort</MenuItem>
                    </NativeSelect>
                </FormControl>
                <Button
                    variant='contained'
                    sx={{ width: '260px' }}
                    onClick={() => handleChange('start', true)}
                >
                    Visualize {preferences.sortingOption}
                </Button>
                <Button
                    variant='contained'
                    onClick={() => handleChange('shuffle', true)}
                >
                    Shuffle
                </Button>
                <Button
                    variant='contained'
                    onClick={() => handleChange('reset', true)}
                >
                    Reset
                </Button>
            </Stack>

            <Box sx={{ width: '60%', display: 'flex' }}>
                <Stack
                    spacing={1}
                    direction='column'
                    sx={{ width: '50%' }}
                    alignItems='center'
                >
                    <p
                        style={{
                            color: 'white',
                            fontSize: '1.5rem',
                            fontWeight: 'bold',
                        }}
                    >
                        Size: {preferences.size}
                    </p>
                    <Slider
                        value={preferences.size}
                        onChange={(event) =>
                            handleChange('size', event.target.value)
                        }
                        min={10}
                        max={50}
                        sx={{ width: '80%' }}
                    />
                </Stack>
                <Stack
                    spacing={1}
                    direction='column'
                    sx={{ width: '50%' }}
                    alignItems='center'
                >
                    <p
                        style={{
                            color: 'white',
                            fontSize: '1.5rem',
                            fontWeight: 'bold',
                        }}
                    >
                        Speed: {preferences.speed}ms
                    </p>
                    <Slider
                        value={preferences.speed}
                        onChange={(event) =>
                            handleChange('speed', event.target.value)
                        }
                        min={1}
                        max={500}
                        sx={{ width: '80%' }}
                    />
                </Stack>
            </Box>
        </Box>
    );
};

export default Controls;
