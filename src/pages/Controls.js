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
                flexWrap: 'wrap',
            }}
        >
            <Stack
                spacing={1}
                direction='row'
                sx={{
                    width: {
                        xs: '100%',
                        sm: '40%',
                    },
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    flexWrap: 'wrap',
                    marginBottm: '2rem',
                    minHeight: '70px',
                }}
                alignItems='center'
            >
                <FormControl
                    variant='standard'
                    sx={{
                        width: { xs: '120px', sm: '220px' },
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
                            fontSize: { xs: '0.6rem', sm: '1rem' },
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
                    sx={{
                        width: { xs: '160px', sm: '260px' },
                        fontSize: { xs: '0.6rem', sm: '1rem' },
                    }}
                    onClick={() => handleChange('start', true)}
                >
                    Visualize {preferences.sortingOption}
                </Button>
                <Button
                    variant='contained'
                    sx={{ fontSize: { xs: '0.6rem', sm: '1rem' } }}
                    onClick={() => handleChange('shuffle', true)}
                >
                    Shuffle
                </Button>
                <Button
                    variant='contained'
                    sx={{ fontSize: { xs: '0.6rem', sm: '1rem' } }}
                    onClick={() => handleChange('reset', true)}
                >
                    Reset
                </Button>
            </Stack>

            <Box
                id='sliderContainer'
                sx={{
                    width: {
                        xs: '100%',
                        sm: '60%',
                    },
                    display: 'flex',
                }}
            >
                <Stack
                    spacing={1}
                    direction='column'
                    sx={{ width: '50%' }}
                    alignItems='center'
                >
                    <p
                        className='SliderInfo'
                        style={{
                            color: 'white',
                            fontWeight: 'bold',
                        }}
                    >
                        Size: {preferences.size}
                    </p>
                    <Slider
                        className='Slider'
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
                        className='SliderInfo'
                        style={{
                            color: 'white',
                            fontSize: { xs: '0.6rem', sm: '1.5rem' },
                            fontWeight: 'bold',
                        }}
                    >
                        Speed: {preferences.speed}ms
                    </p>
                    <Slider
                        className='Slider'
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
