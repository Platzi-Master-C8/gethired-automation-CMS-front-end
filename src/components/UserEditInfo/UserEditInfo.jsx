import React, { useEffect, useState } from 'react';
import { Typography, TextField, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useUser, useDispatch } from '../../store/UserProvider';
import { TYPES } from '../../store/types';

const TextFieldUserEdit = styled(TextField)`
    margin: 10px 15px;
    width: 320px;

    .css-au3a9q-MuiFormLabel-root-MuiInputLabel-root,
    .css-au3a9q-MuiFormLabel-root-MuiInputLabel-root.Mui-focused {
        color: #ae4eff;
    }
    .css-10botns-MuiInputBase-input-MuiFilledInput-input {
        font-weight: 500;
        font-size: 18px;
    }
    .css-cio0x1-muiinputbase-root-muifilledinput-root:after,
    .css-cio0x1-MuiInputBase-root-MuiFilledInput-root:hover:not(.Mui-disabled):before,
    .css-cio0x1-MuiInputBase-root-MuiFilledInput-root:after,
    .css-cio0x1-MuiInputBase-root-MuiFilledInput-root:before {
        border-bottom: 2px solid #ae4eff;
    }
`;

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

const UserEditInfo = () => {
    const { user } = useUser();
    const dispatch = useDispatch();
    // const userDescriptionRef = useRef();

    // eslint-disable-next-line dot-notation
    const [description, setDescription] = useState(user['user_description']);

    useEffect(() => {
        // console.log('Descripcion : ', userDescriptionRef.current);
        dispatch({ type: TYPES.UPDATE_USER, payload: { user_description: description } });
    }, [description, dispatch]);

    return (
        <Grid container sx={{ width: '85%', margin: 'auto' }}>
            <Grid item sm={4}>
                <Typography sx={{ fontSize: 20, fontWeight: 500, margin: '10px 5px' }}>Tus Redes:</Typography>
                <TextFieldUserEdit
                    id="filled-required"
                    label="El link a tu perfil de LinkedIn:"
                    defaultValue="https://www.linkedin.com/in/username"
                    variant="filled"
                />
                <TextFieldUserEdit
                    id="filled-required"
                    label="El link a tu perfil de GitHub:"
                    defaultValue="https://github.com/username"
                    variant="filled"
                />
                <TextFieldUserEdit
                    id="filled-required"
                    label="El link a tu perfil de Twitter:"
                    defaultValue="https://www.twitter.com/username"
                    variant="filled"
                />
            </Grid>
            <Grid item sm={8}>
                <Typography sx={{ fontSize: 20, fontWeight: 500, margin: '10px 0px' }}>
                    Un resumen para que todo el mundo te conozca:
                </Typography>
                <TextArea
                    id="standard-multiline-static"
                    multiline
                    rows={8}
                    value={description}
                    variant="standard"
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
