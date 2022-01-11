import React from 'react';
import { Button, Box, Stack } from '@mui/material';

const UserEditButtons = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                '& > *': {
                    m: 1,
                },
            }}
        >
            <Stack direction="row" sx={{ padding: '20px', marginRight: 20 }}>
                <Button
                    sx={{
                        color: '#fff',
                        textTransform: 'capitalize',
                        margin: '10px',
                        borderRadius: '10px',
                        backgroundColor: '#FF5353',
                        '&:hover': {
                            backgroundColor: '#FF5353',
                        },
                    }}
                    variant="contained"
                >
                    Descartar cambios
                </Button>
                <Button
                    sx={{
                        color: '#fff',
                        textTransform: 'capitalize',
                        margin: '10px',
                        borderRadius: '10px',
                        backgroundColor: '#555BFF',
                        '&:hover': {
                            backgroundColor: '#555BFF',
                        },
                    }}
                    variant="contained"
                >
                    Guardar los cambios
                </Button>
                <Button
                    sx={{ color: '#000', textTransform: 'capitalize', '&:hover': { color: '#FF5353' } }}
                    variant="text"
                >
                    Ocultar Perfil
                </Button>
            </Stack>
        </Box>
    );
};

export default UserEditButtons;
