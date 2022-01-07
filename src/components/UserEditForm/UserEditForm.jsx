import React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

const experiencia = [
    {
        value: 'Sin Conocimiento',
        label: 'Sin Conocimiento',
    },
    {
        value: 'Proficiente',
        label: 'Proficiente',
    },
    {
        value: 'Experto',
        label: 'Experto',
    },
];

const codigoPais = [
    {
        value: 'México',
        label: '+52',
    },
    {
        value: 'Estados Unidos',
        label: '+1',
    },
    {
        value: 'Canadá',
        label: '+1',
    },
];

const TextFieldUserEdit = styled(TextField)`
    margin: 10px 15px;
    width: 250px;

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
`;

const TextFieldUserEditCountry = styled(TextField)`
    margin: 10px 5px;
    width: 105px;

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
        margin: 10px 15px;
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
    width: 55%;
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
    const [experienciaUser, setExperienciaUser] = React.useState('Sin Conocimiento');
    const [codigoPaisUser, setCodigoPais] = React.useState('+52');

    const handleChangeExperienciaUser = (event) => {
        setExperienciaUser(event.target.value);
    };

    const handleChangeCodigoPais = (event) => {
        setCodigoPais(event.target.value);
    };

    return (
        <div>
            <Typography sx={{ color: '#000', fontSize: '21px', padding: '20px 10px', fontWeight: '600' }}>
                Tu información personal:
            </Typography>
            <GridContainer container spacing={1}>
                <Grid item sm={6} xs={12}>
                    <TextFieldUserEdit
                        id="filled-required"
                        label="Nombre(s)"
                        defaultValue="Johnnie Daniel"
                        variant="filled"
                    />
                </Grid>
                <Grid item sm={6} xs={12}>
                    <TextFieldUserEdit
                        id="filled-required"
                        label="Apellidos"
                        defaultValue="Ruiz Schambach"
                        variant="filled"
                    />
                </Grid>
                <Grid item sm={6} xs={12}>
                    <TextFieldUserEdit
                        id="filled-required"
                        label="Titulo/Profesión"
                        defaultValue="Full Stack Developer"
                        variant="filled"
                    />
                </Grid>
                <Grid item sm={6} xs={12}>
                    <TextFieldUserEdit
                        id="filled-select-currency"
                        select
                        label="Nivel de Conocimiento"
                        value={experienciaUser}
                        onChange={handleChangeExperienciaUser}
                        variant="filled"
                    >
                        {experiencia.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextFieldUserEdit>
                </Grid>
                <Grid item sm={5} xs={12}>
                    <TextFieldUserEdit
                        id="date"
                        label="Fecha de Nacimiento"
                        type="date"
                        defaultValue="2017-05-24"
                        sx={{ width: 250 }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="filled"
                    />
                </Grid>
                <Grid item sm={2} xs={12}>
                    <TextFieldUserEditCountry
                        id="filled-select-currency"
                        select
                        label="Código de País"
                        value={codigoPaisUser}
                        onChange={handleChangeCodigoPais}
                        variant="filled"
                    >
                        {codigoPais.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextFieldUserEditCountry>
                </Grid>
                <Grid item sm={5} xs={12}>
                    <TextFieldUserEditNumber
                        id="filled-select-currency"
                        label="Número"
                        defaultValue="55 1234 5678"
                        variant="filled"
                    />
                </Grid>
                <GridItem item sm={6} xs={12}>
                    <Typography sx={{ color: '#000', fontWeight: 600, fontSize: 16 }}>Género</Typography>
                    <RadioGroup aria-label="gender" defaultValue="mujer" name="radio-buttons-group">
                        <FormControlLabel
                            value="mujer"
                            control={
                                <RadioCustom
                                    sx={{
                                        '&.Mui-checked': {
                                            color: '#ae4eff',
                                        },
                                    }}
                                />
                            }
                            label="Mujer"
                        />
                        <FormControlLabel
                            value="hombre"
                            control={
                                <RadioCustom
                                    sx={{
                                        '&.Mui-checked': {
                                            color: '#ae4eff',
                                        },
                                    }}
                                />
                            }
                            label="Hombre"
                        />
                        <FormControlLabel
                            value="otro"
                            control={
                                <RadioCustom
                                    sx={{
                                        '&.Mui-checked': {
                                            color: '#ae4eff',
                                        },
                                    }}
                                />
                            }
                            label="Otro"
                        />
                    </RadioGroup>
                </GridItem>
                <Grid item xs={6}>
                    <TextFieldUserEdit
                        id="filled-required"
                        label="Email"
                        defaultValue="Email@Email.com"
                        variant="filled"
                    />
                    <TextFieldUserEdit
                        id="filled-required"
                        label="Username"
                        defaultValue="johnniedrs"
                        variant="filled"
                    />
                </Grid>
            </GridContainer>
        </div>
    );
};

export { UserEditForm };
