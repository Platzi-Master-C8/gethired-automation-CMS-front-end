/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { UserInfo } from '../../components/UserInfo/UserInfo';
import UserPages from '../../components/UserPages/UserPages';
import Header from '../../components/Header/Header';

import { useUser, useDispatch } from '../../store/UserProvider';
import getUser from '../../data/getUser';
import { TYPES } from '../../store/types';
import Spinner from '../../components/spinner/Spinner';

import './UserProfile.scss';

const UserProfile = () => {
    const userState = useUser();
    const { isLoading, user } = userState;
    const dispatch = useDispatch();

    const updateUser = () => {
        const userToken = localStorage.getItem('Token');

        getUser(userToken)
            .then((newUser) =>
                dispatch({
                    type: TYPES.GET_USER,
                    payload: { isLoading: false, error: null, user: { ...newUser } },
                }),
            )
            .catch((err) => {
                dispatch({ type: TYPES.ERROR, payload: { isLoading: false, error: err, user: {} } });
            });
    };

    useEffect(() => {
        updateUser();
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
