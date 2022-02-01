import { TYPES } from './types';
import putUser from '../data/putUser';

const userReducer = (state, action) => {
    switch (action.type) {
        case TYPES.GET_USER:
            return { ...state, ...action.payload };
        case TYPES.ERROR:
            return { ...state, ...action.payload };
        case TYPES.UPDATE_USER:
            return { ...state, userUpdate: { ...state.userUpdate, ...action.payload } };
        case TYPES.PUT_UPDATE_USER: {
            const updateUser = { ...state.user, ...state.userUpdate };
            const userEdit = async () => {
                await putUser(action.payload, updateUser);
            };
            userEdit();
            return { ...state, user: { ...state.user } };
        }
        default:
            return state;
    }
};

export default userReducer;
