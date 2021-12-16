import React from 'react';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { userData } from '../../data/data';

const avatarStyle = {
    width: [100, 100, 200, 200, 200],
    height: [100, 100, 200, 200, 200],
};

const SectionFirstStyle = styled('div')(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
        textAlign: 'center',
    },
    [theme.breakpoints.up('md')]: {},
    [theme.breakpoints.up('lg')]: {},
}));
const ButtonStyle = styled(Button)(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
        width: '90%',
        [theme.size]: 'medium',
    },
}));
const UserInfo = () => {
    const icons = {
        LinkedIn: <LinkedInIcon sx={{ mr: 1 }} />,
        GitHub: <GitHubIcon sx={{ mr: 1 }} />,
        Twitter: <TwitterIcon sx={{ mr: 1 }} />,
    };
    return (
        <Container fixed sx={{ mt: 2 }}>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid item xs={12} md={4} container direction="column" justifyContent="center" alignItems="center">
                    <Avatar alt="Avatar" sx={avatarStyle} src={userData?.user_picture} />
                </Grid>
                <Grid item xs={12} md={8} container direction="column">
                    <SectionFirstStyle>
                        <Typography variant="h4">{`${userData?.user_first_name} ${userData?.user_last_name}`}</Typography>
                        <Typography variant="h7">{`${userData?.user_profession}`}</Typography>
                        <Box sx={{ width: { sx: '100%' } }}>
                            <ButtonStyle sx={{ mt: 2 }} variant="outlined" size="medium">
                                Editar Perfil
                            </ButtonStyle>
                        </Box>
                    </SectionFirstStyle>
                </Grid>
            </Grid>
            <Divider sx={{ m: 2 }} />
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid item xs={4} container direction="column" justifyContent="center" alignItems="right">
                    {userData?.user_socia_networks.map((red, index) => (
                        // eslint-disable-next-line react/no-array-index-key
                        <Link key={index} sx={{ m: 1, pl: 2, display: 'flex' }} href={red[1]}>
                            {icons[red[0]]} {red[0]}
                        </Link>
                    ))}
                </Grid>
                <Grid item xs={8} container direction="column">
                    <Typography variant="h5">About me</Typography>
                    <Typography
                        paragraph
                        variant="body2"
                        align="justify"
                        sx={{ pr: 2 }}
                    >{`${userData?.user_description}`}</Typography>
                </Grid>
            </Grid>
            <Divider sx={{ m: 2 }} />
        </Container>
    );
};

export { UserInfo };
