import React, { useEffect } from 'react';
import { UserInfo } from '../../components/UserInfo/UserInfo';
import UserPages from '../../components/UserPages/UserPages';
import Header from '../../components/Header/Header';

import { useUser, useDispatch } from '../../store/UserProvider';
import getUser from '../../data/getUser';
import { TYPES } from '../../store/TYPES';
import Spinner from '../../components/spinner/Spinner';

import './UserProfile.scss';

const UserProfile = () => {
    const userState = useUser();
    const { isLoading, user } = userState;
    const dispatch = useDispatch();

    const updateUser = () => {
        const userId = '9243ff9a-70f6-408b-b8a1-eb814b318fa7';

        getUser(userId)
            .then((newUser) =>
                dispatch({ type: TYPES.GET_USER, payload: { isLoading: false, error: null, user: { ...newUser } } }),
            )
            .catch((err) => {
                dispatch({ type: TYPES.ERROR, payload: { isLoading: false, error: err, user: {} } });
            });
    };
    useEffect(() => {
        updateUser();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <React.Fragment>
            <Header />
            {isLoading ? (
                <Spinner />
            ) : (
                <div className="profileContainer">
                    <UserInfo user={user} />
                    <UserPages />
                </div>
            )}
        </React.Fragment>
    );
};

export { UserProfile };
