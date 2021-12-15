import React from 'react';
import { UserInfo } from '../../components/UserInfo/UserInfo';
import UserPages from '../../components/UserPages/UserPages';
import Header from '../../components/Header/Header';

const UserProfile = () => {
    return (
        <React.Fragment>
            <Header />
            <UserInfo />
            <div>Templates</div>
            <div className="pagesContainer">
                <UserPages />
            </div>
        </React.Fragment>
    );
};

export { UserProfile };
