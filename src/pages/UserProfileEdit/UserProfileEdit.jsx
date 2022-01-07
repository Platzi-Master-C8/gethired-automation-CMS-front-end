import React from 'react';
import Header from '../../components/Header/Header';
import { UserEditForm } from '../../components/UserEditForm/UserEditForm';

const UserProfileEdit = () => {
    return (
        <React.Fragment>
            <Header />
            <UserEditForm />
        </React.Fragment>
    );
};

export { UserProfileEdit };
