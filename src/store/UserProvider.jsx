/* eslint-disable react/prop-types */
import React, { createContext, useReducer, useContext } from 'react';
import userReducer from './storeReducer';
import { user, userUpdate } from '../data/data';

const UserContext = createContext();

const initialState = {
    isLoading: true,
    error: null,
    user,
    userUpdate,
};

const UserProvider = ({ children }) => {
    return (
        <React.StrictMode>
            <UserContext.Provider value={useReducer(userReducer, initialState)}>{children}</UserContext.Provider>
        </React.StrictMode>
    );
};

const useUser = () => useContext(UserContext)[0];
const useDispatch = () => useContext(UserContext)[1];

export { UserContext, useUser, useDispatch };
export default UserProvider;
