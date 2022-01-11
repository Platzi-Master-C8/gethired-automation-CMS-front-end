import React from 'react';
import Stack from '@mui/material/Stack';
import Header from '../../components/Header/Header';
import UserEditForm from '../../components/UserEditForm/UserEditForm';
import UserEditAvatar from '../../components/UserEditAvatar/UserEditAvatar';

const UserProfileEdit = () => {
    return (
        <React.Fragment>
            <Header />
            <Stack direction="row" justifyContent="center">
                <UserEditAvatar />
                <UserEditForm />
            </Stack>
        </React.Fragment>
    );
};

export default UserProfileEdit;
