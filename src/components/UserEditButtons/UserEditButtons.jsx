/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PendingIcon from '@mui/icons-material/Pending';
import ErrorIcon from '@mui/icons-material/Error';
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
    },
});
const messageBox = {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: '60px',
};

const UserEditButtons = ({ errorsForm }) => {
    const dispatch = useDispatch();
    const { user } = useUser();

    const [showError, setShowError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [succes, setSucces] = useState(false);

    const tempLoading = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setSucces(true);
        }, 2000);
    };

    const checkErrors = () => {
        const fields = [
            'firstName',
            'lastName',
            'birthday',
            'phoneNumber',
            'email',
            'username',
            'linkedin',
            'github',
            'twitter',
        ];
        const errors = fields.filter((error) => errorsForm[error]);
        return errors;
    };

    const handleUpdateUser = () => {
        if (showError) {
            setShowError(false);
        }
        // setLoading(true);
        tempLoading();
        const userId = user.user_id;
        dispatch({ type: TYPES.PUT_UPDATE_USER, payload: userId });
    };

    const handleClick = () => {
        const errors = checkErrors();
        return errors.length !== 0 ? setShowError(true) : handleUpdateUser();
    };

    return (
        <React.Fragment>
            {showError ? (
                <Box sx={[{ color: '#FF5353' }, messageBox]}>
                    <ErrorIcon />
                    Parece que hay algun error en tus datos :(
                </Box>
            ) : null}
            {loading ? (
                <Box sx={[{ color: '#0AC533' }, messageBox]}>
                    <PendingIcon />
                    Loading...
                </Box>
            ) : null}
            {succes ? (
                <Box sx={[{ color: '#0AC533' }, messageBox]}>
                    <CheckCircleIcon />
                    Cambios guardados con exito!
                </Box>
            ) : null}
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
                    onClick={handleClick}
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
        </React.Fragment>
    );
};

export default UserEditButtons;
