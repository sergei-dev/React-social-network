import {
    stopSubmit
} from 'redux-form';
import {
    authApi
} from '../api/api';

const SET_USER_DATA = 'auth/SET_USER_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.payload,
            }
        }

        default:
            return state;
    }

}

export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {
        userId,
        email,
        login,
        isAuth
    }
});

export const getAuthUserData = () => {
    return async (dispatch) => {
        const response = await authApi.setAuth();

        if (response.resultCode === 0) {
            let {
                id,
                email,
                login
            } = response.data;
            dispatch(setAuthUserData(id, email, login, true));
        }
    }
}

export const login = (email, password, rememberMe) => {
    return async (dispatch) => {
        const response = await authApi.login(email, password, rememberMe);

        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData());
        } else {
            const message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
            dispatch(stopSubmit('login', {
                _error: message,
            }));
        }
    }
}

export const logout = () => {
    return async (dispatch) => {
        const response = await authApi.logout();

        if (response.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }
    }
}

export default authReducer;