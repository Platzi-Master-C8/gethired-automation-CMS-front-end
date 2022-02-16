import React from 'react';
import { Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch, useUser } from '../../store/UserProvider';
import { TYPES } from '../../store/types';

const styleButton = {
    textTransform: 'capitalize',
    margin: '10px',
    borderRadius: '10px',
};
const directionButtons = (theme) => ({
    [theme.breakpoints.up('md')]: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        // alignItems: 'center',
    },
});

const UserEditButtons = () => {
    const dispatch = useDispatch();
    const { user } = useUser();

    const handleUpdateUser = () => {
        const userId = user.user_id;
        dispatch({ type: TYPES.PUT_UPDATE_USER, payload: userId });
    };

    return (
        <Box
            sx={[
                {
                    display: 'flex',
                    padding: '20px 40px',
                    '& > *': {
                        m: 1,
                    },
                },
                directionButtons,
            ]}
        >
            <Button
                sx={[
                    {
                        color: '#fff',
                        backgroundColor: '#555BFF',
                        '&:hover': {
                            backgroundColor: '#555BFF',
                        },
                    },
                    styleButton,
                ]}
                variant="contained"
                onClick={handleUpdateUser}
            >
                Guardar los cambios
            </Button>
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
                color="error"
                sx={{
                    textTransform: 'capitalize',
                    margin: '10px',
                    borderRadius: '10px',
                    '&:hover': {
                        color: '#FFFFFF',
                        backgroundColor: '#FF5353',
                        border: '#FF5353',
                    },
                }}
                variant="outlined"
            >
                Ocultar Perfil
            </Button>
        </Box>
    );
};

export default UserEditButtons;
