import React from 'react';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Header from '../../components/Header/Header';
import UserEditForm from '../../components/UserEditForm/UserEditForm';
import UserEditAvatar from '../../components/UserEditAvatar/UserEditAvatar';
import UserEditInfo from '../../components/UserEditInfo/UserEditInfo';

const UserProfileEdit = () => {
    return (
        <React.Fragment>
            <Header />
            <Stack direction="row" justifyContent="center">
                <UserEditAvatar />
                <UserEditForm />
            </Stack>
            <Divider sx={{ borderColor: '#ae4eff', borderWidth: '1px', width: '85%', margin: '20px auto' }} />
            <UserEditInfo />
        </React.Fragment>
    );
};

export default UserProfileEdit;
