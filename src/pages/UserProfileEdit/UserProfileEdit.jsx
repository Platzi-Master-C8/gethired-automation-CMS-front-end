import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Header from '../../components/Header/Header';
import UserEditForm from '../../components/UserEditForm/UserEditForm';
import UserEditAvatar from '../../components/UserEditAvatar/UserEditAvatar';
import UserEditInfo from '../../components/UserEditInfo/UserEditInfo';
import UserEditButtons from '../../components/UserEditButtons/UserEditButtons';

const UserProfileEdit = () => {
    return (
        <React.Fragment>
            <Header />
            <Container fixed>
                <Box sx={{ margin: '20px 0' }}>
                    <Box>
                        <Grid container spacing={2}>
                            <Grid
                                item
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                                xs={12}
                                sm={12}
                                md={4}
                            >
                                <UserEditAvatar />
                            </Grid>
                            <Grid item xs={12} sm={12} md={8}>
                                <UserEditForm />
                            </Grid>
                        </Grid>
                    </Box>

                    <Divider
                        variant="middle"
                        sx={{ borderColor: '#ae4eff', borderWidth: '1px', width: '85%', margin: '20px auto' }}
                    />

                    <Box sx={{ m: 2 }}>
                        <UserEditInfo />
                    </Box>
                </Box>
                <UserEditButtons />
            </Container>
        </React.Fragment>
    );
};

export default UserProfileEdit;
