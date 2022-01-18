import { TYPES } from './TYPES';

const userReducer = (state, action) => {
    switch (action.type) {
        case TYPES.GET_USER:
            return { ...state, ...action.payload };
        case TYPES.ERROR:
            return { ...state, ...action.payload };
        default:
            return state;
    }
};

export default userReducer;
