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
import { userData } from '../../data/data';

const UserInfo = () => {
    const icons = {
        LinkedIn: <LinkedInIcon sx={{ mr: 1 }} />,
        GitHub: <GitHubIcon sx={{ mr: 1 }} />,
        Twitter: <TwitterIcon sx={{ mr: 1 }} />,
    };
    return (
        <Container maxWidth="md">
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid item xs={4} container direction="column" justifyContent="center" alignItems="center">
                    <Avatar alt="Avatar" sx={{ minWidth: 150, minHeight: 150 }} src={userData.user_picture} />
                </Grid>
                <Grid item xs={8} container direction="column">
                    <Typography variant="h4">{`${userData.user_first_name} ${userData.user_last_name}`}</Typography>
                    <Typography variant="h7">{`${userData.user_profession}`}</Typography>
                    <Button sx={{ mt: 2, maxWidth: '40%', minWidth: '160px' }} variant="outlined" size="small">
                        Editar Perfil
                    </Button>
                </Grid>
            </Grid>
            <Divider sx={{ m: 2 }} />
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid item xs={4} container direction="column" justifyContent="center" alignItems="right">
                    {userData.user_socia_networks.map((red) => (
                        <Link sx={{ m: 1, pl: 2, display: 'flex' }} href={red[1]}>
                            {' '}
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
                    >{`${userData.user_description}`}</Typography>
                </Grid>
            </Grid>
            <Divider sx={{ m: 2 }} />
        </Container>
    );
};

export { UserInfo };
