import React from 'react';
import { Button, Box, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch, useUser } from '../../store/UserProvider';
import { TYPES } from '../../store/types';

const UserEditButtons = () => {
    const dispatch = useDispatch();
    const { user } = useUser();

    const handleUpdateUser = () => {
        const userId = user.user_id;
        dispatch({ type: TYPES.PUT_UPDATE_USER, payload: userId });
    };

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
                        a: {
                            textDecoration: 'none',
                            color: '#fff',
                        },
                    }}
                    variant="contained"
                >
                    <Link to="/">Descartar cambios</Link>
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
                    onClick={handleUpdateUser}
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
