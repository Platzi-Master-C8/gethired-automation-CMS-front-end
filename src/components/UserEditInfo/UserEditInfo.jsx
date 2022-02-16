import React, { useEffect, useState } from 'react';
import { Typography, TextField, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { useUser, useDispatch } from '../../store/UserProvider';
import { TYPES } from '../../store/types';
import * as validations from '../../utils/validateForm';

const TextArea = styled(TextField)`
    width: 85%;
    .css-5xn5lu-MuiInputBase-root-MuiInput-root {
        padding: 20px;
    }
    .css-5xn5lu-muiinputbase-root-muiinput-root:before,
    .css-5xn5lu-MuiInputBase-root-MuiInput-root:after,
    .css-5xn5lu-MuiInputBase-root-MuiInput-root:hover:not(.Mui-disabled):before {
        border-bottom: 2px solid #ae4eff;
    }
`;

const FormBox = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
    paddingRight: 10,
}));

const containerFormStyle = (theme) => ({
    '& .MuiTextField-root': { m: 1, width: '25ch' },
    [theme.breakpoints.down('sm')]: {
        '& .MuiTextField-root': { m: 1, width: '40ch' },
    },
});

const UserEditInfo = () => {
    const { user } = useUser();
    const dispatch = useDispatch();
    // const userDescriptionRef = useRef();

    // eslint-disable-next-line dot-notation
    const [description, setDescription] = useState(user['user_description']);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        // console.log('Descripcion : ', userDescriptionRef.current);
        dispatch({ type: TYPES.UPDATE_USER, payload: { user_description: description } });
    }, [description, dispatch]);

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={4}>
                <Box component="form" sx={containerFormStyle}>
                    <FormBox>
                        <Typography sx={{ fontSize: 20, fontWeight: 500, margin: '10px 5px' }}>Tus Redes:</Typography>
                        <TextField
                            id="filled-required"
                            label="El link a tu perfil de LinkedIn:"
                            defaultValue="https://www.linkedin.com/in/username"
                            variant="filled"
                            onChange={(e) => setErrors({ ...errors, linkedin: validations.linkedin(e.target.value) })}
                            error={errors.linkedin}
                            helperText={errors.linkedin ? 'El link de LinkedIn no es válido' : ''}
                        />
                        <TextField
                            id="filled-required"
                            label="El link a tu perfil de GitHub:"
                            defaultValue="https://github.com/username"
                            variant="filled"
                            onChange={(e) => setErrors({ ...errors, github: validations.github(e.target.value) })}
                            error={errors.github}
                            helperText={errors.github ? 'El link de GitHub no es válido' : ''}
                        />
                        <TextField
                            id="filled-required"
                            label="El link a tu perfil de Twitter:"
                            defaultValue="https://www.twitter.com/username"
                            variant="filled"
                            onChange={(e) => setErrors({ ...errors, twitter: validations.twitter(e.target.value) })}
                            error={errors.twitter}
                            helperText={errors.twitter ? 'El link de Twitter no es válido' : ''}
                        />
                    </FormBox>
                </Box>
            </Grid>

            <Grid item xs={12} sm={12} md={8}>
                <Typography sx={{ fontSize: 20, fontWeight: 500, margin: '10px 0px' }}>
                    Un resumen para que todo el mundo te conozca:
                </Typography>
                <TextArea
                    id="standard-multiline-static"
                    multiline
                    rows={8}
                    value={description}
                    variant="outlined"
                    onChange={(e) => {
                        setDescription(e.target.value);
                        dispatch({ type: TYPES.UPDATE_USER, payload: { user_description: e.target.value } });
                    }}
                />
            </Grid>
        </Grid>
    );
};

export default UserEditInfo;
