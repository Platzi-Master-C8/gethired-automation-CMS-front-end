/* eslint-disable dot-notation */
import React, { useEffect, useState, useRef } from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Box from '@mui/material/Box';
import { useUser, useDispatch } from '../../store/UserProvider';
import { TYPES } from '../../store/types';
import * as validations from '../../utils/validateForm';

const experiencia = [
    {
        id: 1,
        value: 'without knowledge',
        label: 'without knowledge',
    },
    {
        id: 2,
        value: 'proficient',
        label: 'proficient',
    },
    {
        id: 3,
        value: 'expert',
        label: 'expert',
    },
];

const FormBox = styled(Box)(() => ({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 2,
}));

const genderOptions = [
    {
        id: 1,
        value: 'Female',
    },
    {
        id: 2,
        value: 'Male',
    },
    {
        id: 3,
        value: 'No binary',
    },
];

const containerFormStyle = (theme) => ({
    '& .MuiTextField-root': { m: 1, width: '25ch' },
    [theme.breakpoints.down('sm')]: {
        '& .MuiTextField-root': { m: 1, width: '40ch' },
    },
});

const UserEditForm = () => {
    const { user } = useUser();
    const dispatch = useDispatch();

    const userFirstNameRef = useRef();
    const userLastNameRef = useRef();
    const userProfessionRef = useRef();
    const userPhoneRef = useRef();
    const userKnowledgeLevel = useRef();
    const userEmailRef = useRef();
    const userNameRef = useRef();
    const [gender, setGender] = useState(user['user_gender']);
    const [experienciaUser, setExperienciaUser] = useState('without knowledge');
    const [errorsForm, setErrorsForm] = useState({});

    const handleChangeExperienciaUser = (event) => {
        setExperienciaUser(event.target.value);
        dispatch({ type: TYPES.UPDATE_USER, payload: { user_knowledge_level: event.target.value } });
    };

    const handleGender = (event) => {
        setGender(event.target.value);
        dispatch({ type: TYPES.UPDATE_USER, payload: { user_gender: event.target.value } });
    };

    useEffect(() => {
        dispatch({
            type: TYPES.UPDATE_USER,
            payload: {
                user_id: user['user_id'],
                user_first_name: userFirstNameRef.current.defaultValue,
                user_last_name: userLastNameRef.current.defaultValue,
                user_profession: userProfessionRef.current.defaultValue,
                user_phone: userPhoneRef.current.defaultValue,
                user_knowledge_level: userKnowledgeLevel.current.value,
                user_email: userEmailRef.current.value,
                user_name: userNameRef.current.value,
                user_gender: gender,
            },
        });
    }, [dispatch, gender, user]);

    return (
        <Box component="form" sx={containerFormStyle}>
            <Typography align="center" sx={{ margin: '10px 0' }} variant="h5" component="h1">
                Tu informacion Personal
            </Typography>
            <FormBox>
                <TextField
                    inputRef={userFirstNameRef}
                    id="filled-required"
                    label="Nombre(s)"
                    defaultValue={user['user_first_name']}
                    onChange={(e) => {
                        setErrorsForm({ ...errorsForm, firstName: validations.firstName(e.target.value) });
                        return dispatch({ type: TYPES.UPDATE_USER, payload: { user_first_name: e.target.value } });
                    }}
                    variant="filled"
                    error={errorsForm.firstName}
                    helperText={errorsForm.firstName ? 'Nombre invalido' : ''}
                />
                <TextField
                    inputRef={userLastNameRef}
                    id="filled-required"
                    label="Apellidos"
                    defaultValue={user['user_last_name']}
                    onChange={(e) => {
                        setErrorsForm({ ...errorsForm, lastName: validations.lastName(e.target.value) });
                        return dispatch({ type: TYPES.UPDATE_USER, payload: { user_last_name: e.target.value } });
                    }}
                    variant="filled"
                    error={errorsForm.lastName}
                    helperText={errorsForm.lastName ? 'Apellido invalido' : ''}
                />
            </FormBox>
            <FormBox>
                <TextField
                    inputRef={userProfessionRef}
                    id="filled-required"
                    label="Titulo/Profesión"
                    defaultValue={user['user_profession']}
                    onChange={(e) =>
                        dispatch({ type: TYPES.UPDATE_USER, payload: { user_profession: e.target.value } })
                    }
                    variant="filled"
                />
                <TextField
                    inputRef={userKnowledgeLevel}
                    id="filled-select-currency"
                    select
                    label="Nivel de Conocimiento"
                    value={experienciaUser}
                    onChange={handleChangeExperienciaUser}
                    variant="filled"
                >
                    {experiencia?.map((option) => (
                        <MenuItem key={option.id} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </FormBox>
            <FormBox>
                <TextField
                    id="date"
                    label="Fecha de Nacimiento"
                    type="date"
                    defaultValue="2017-05-24"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="filled"
                    onChange={(e) => {
                        setErrorsForm({ ...errorsForm, birthDate: validations.birthDate(e.target.value) });
                        // return dispatch({ type: TYPES.UPDATE_USER, payload: { user_birth_day: e.target.value } })
                    }}
                    error={errorsForm.birthDate}
                    helperText={errorsForm.birthDate ? 'Debes tener entre 18 y 122 años' : ''}
                />
                <TextField
                    inputRef={userPhoneRef}
                    id="filled-select-currency"
                    label="Número de Teléfono"
                    defaultValue={user['user_phone']}
                    onChange={(e) => {
                        setErrorsForm({ ...errorsForm, phone: validations.phoneNumber(e.target.value) });
                        return dispatch({ type: TYPES.UPDATE_USER, payload: { user_phone: e.target.value } });
                    }}
                    variant="filled"
                    error={errorsForm.phone}
                    helperText={errorsForm.phone ? 'Número invalido' : ''}
                />
            </FormBox>
            <FormBox>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                    }}
                >
                    <TextField
                        inputRef={userEmailRef}
                        id="filled-required"
                        label="Email"
                        defaultValue={user['user_email']}
                        onChange={(e) => {
                            setErrorsForm({ ...errorsForm, email: validations.email(e.target.value) });
                            return dispatch({ type: TYPES.UPDATE_USER, payload: { user_email: e.target.value } });
                        }}
                        variant="filled"
                        error={errorsForm.email}
                        helperText={errorsForm.email ? 'Email invalido' : ''}
                    />
                    <TextField
                        inputRef={userNameRef}
                        id="filled-required"
                        label="Username"
                        defaultValue={user['user_name']}
                        onChange={(e) => {
                            setErrorsForm({ ...errorsForm, username: validations.username(e.target.value) });
                            return dispatch({ type: TYPES.UPDATE_USER, payload: { user_name: e.target.value } });
                        }}
                        variant="filled"
                        error={errorsForm.username}
                        helperText={errorsForm.username ? 'Username invalido' : ''}
                    />
                </Box>
                <Box
                    sx={{
                        minWidth: '244px',
                        paddingLeft: '8px',
                        paddingRight: '10px',
                        marginRight: '12px',
                    }}
                >
                    <Typography
                        sx={{
                            color: '#000',
                            fontWeight: 600,
                            fontSize: 16,
                        }}
                    >
                        Género
                    </Typography>
                    <RadioGroup aria-label="gender" value={gender} onChange={handleGender} name="use-radio-group">
                        {genderOptions?.map((gend) => (
                            <FormControlLabel
                                key={gend.id}
                                value={gend.value}
                                control={
                                    <Radio
                                        sx={{
                                            '&.Mui-checked': {
                                                color: '#ae4eff',
                                            },
                                        }}
                                    />
                                }
                                label={gend.value}
                            />
                        ))}
                    </RadioGroup>
                </Box>
            </FormBox>
        </Box>
    );
};

export default UserEditForm;
