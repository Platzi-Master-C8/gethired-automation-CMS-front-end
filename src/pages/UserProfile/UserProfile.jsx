import React from 'react';
import { UserInfo } from '../../components/UserInfo/UserInfo';

const UserProfile = () => {
    return (
        <React.Fragment>
            <div>Header</div>
            <UserInfo />
            <div>Templates</div>
        </React.Fragment>
    );
};

export { UserProfile };
