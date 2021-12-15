import React from 'react';
import { UserInfo } from '../../components/UserInfo/UserInfo';
import UserPages from '../../components/UserPages/UserPages';
import Header from '../../components/Header/Header';

import './UserProfile.scss';

const UserProfile = () => {
    return (
        <React.Fragment>
            <Header />
            <div className="profileContainer">
                <UserInfo />
                <UserPages />
            </div>
        </React.Fragment>
    );
};

export { UserProfile };
