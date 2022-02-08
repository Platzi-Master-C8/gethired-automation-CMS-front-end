/* eslint-disable dot-notation */
import React, { useEffect, useState, useRef } from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useUser, useDispatch } from '../../store/UserProvider';
import { TYPES } from '../../store/types';

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

const TextFieldUserEditNumber = styled(TextField)`
    margin: 10px 15px;
    width: 195px;

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
    .css-cio0x1-MuiInputBase-root-MuiFilledInput-root:after {
        border-bottom: 2px solid #ae4eff;
    }
    @media (max-width: 400px) {
        width: 250px;
        margin-left: 15px;
    }
`;

const RadioCustom = styled(Radio)`
    color: #ae4eff;
    .Mui-checked {
        color: #ae4eff;
    }
`;

const GridContainer = styled(Grid)`
    width: 85%;
    padding: 0px 20px;
    @media (max-width: 800px) {
        width: 100%;
    }
`;

const GridItem = styled(Grid)`
    padding: 0px 20px;
    padding-left: 30px !important;
`;

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
        <div>
            <Typography sx={{ color: '#000', fontSize: '21px', padding: '20px 10px', fontWeight: '600' }}>
                Tu información personal:
            </Typography>
            <GridContainer container spacing={1}>
                <Grid item sm={6} xs={12}>
                    <TextFieldUserEdit
                        inputRef={userFirstNameRef}
                        id="filled-required"
                        label="Nombre(s)"
                        defaultValue={user['user_first_name']}
                        onChange={(e) =>
                            dispatch({ type: TYPES.UPDATE_USER, payload: { user_first_name: e.target.value } })
                        }
                        variant="filled"
                    />
                </Grid>
                <Grid item sm={6} xs={12}>
                    <TextFieldUserEdit
                        inputRef={userLastNameRef}
                        id="filled-required"
                        label="Apellidos"
                        defaultValue={user['user_last_name']}
                        onChange={(e) =>
                            dispatch({ type: TYPES.UPDATE_USER, payload: { user_last_name: e.target.value } })
                        }
                        variant="filled"
                    />
                </Grid>
                <Grid item sm={6} xs={12}>
                    <TextFieldUserEdit
                        inputRef={userProfessionRef}
                        id="filled-required"
                        label="Titulo/Profesión"
                        defaultValue={user['user_profession']}
                        onChange={(e) =>
                            dispatch({ type: TYPES.UPDATE_USER, payload: { user_profession: e.target.value } })
                        }
                        variant="filled"
                    />
                </Grid>
                <Grid item sm={6} xs={12}>
                    <TextFieldUserEdit
                        inputRef={userKnowledgeLevel}
                        id="filled-select-currency"
                        select
                        label="Nivel de Conocimiento"
                        value={experienciaUser}
                        onChange={handleChangeExperienciaUser}
                        variant="filled"
                    >
                        {experiencia.map((option) => (
                            <MenuItem key={option.id} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextFieldUserEdit>
                </Grid>
                <Grid item sm={6} xs={12}>
                    <TextFieldUserEdit
                        id="date"
                        label="Fecha de Nacimiento"
                        type="date"
                        defaultValue="2017-05-24"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="filled"
                    />
                </Grid>
                <Grid item sm={4} xs={12}>
                    <TextFieldUserEditNumber
                        inputRef={userPhoneRef}
                        id="filled-select-currency"
                        label="Número"
                        defaultValue={user['user_phone']}
                        onChange={(e) => dispatch({ type: TYPES.UPDATE_USER, payload: { user_phone: e.target.value } })}
                        variant="filled"
                    />
                </Grid>
                <GridItem item sm={6} xs={12}>
                    <Typography sx={{ color: '#000', fontWeight: 600, fontSize: 16 }}>Género</Typography>
                    <RadioGroup aria-label="gender" value={gender} onChange={handleGender} name="use-radio-group">
                        <FormControlLabel
                            value="Femenino"
                            control={
                                <RadioCustom
                                    sx={{
                                        '&.Mui-checked': {
                                            color: '#ae4eff',
                                        },
                                    }}
                                />
                            }
                            label="Femenino"
                        />
                        <FormControlLabel
                            value="Masculino"
                            control={
                                <RadioCustom
                                    sx={{
                                        '&.Mui-checked': {
                                            color: '#ae4eff',
                                        },
                                    }}
                                />
                            }
                            label="Masculino"
                        />
                        <FormControlLabel
                            value="No binario"
                            control={
                                <RadioCustom
                                    sx={{
                                        '&.Mui-checked': {
                                            color: '#ae4eff',
                                        },
                                    }}
                                />
                            }
                            label="No binario"
                        />
                    </RadioGroup>
                </GridItem>
                <Grid item xs={6}>
                    <TextFieldUserEdit
                        inputRef={userEmailRef}
                        id="filled-required"
                        label="Correo electrónico"
                        defaultValue={user['user_email']}
                        onChange={(e) => dispatch({ type: TYPES.UPDATE_USER, payload: { user_email: e.target.value } })}
                        variant="filled"
                    />
                    <TextFieldUserEdit
                        inputRef={userNameRef}
                        id="filled-required"
                        label="Nombre de usuario"
                        defaultValue={user['user_name']}
                        onChange={(e) => dispatch({ type: TYPES.UPDATE_USER, payload: { user_name: e.target.value } })}
                        variant="filled"
                    />
                </Grid>
            </GridContainer>
        </div>
    );
};

export default UserEditForm;
