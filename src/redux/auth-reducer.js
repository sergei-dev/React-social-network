import { authApi } from '../api/api';

const SET_USER_DATA = 'SET_USER_DATA';
const GET_USER_LOGIN = 'GET_USER_LOGIN';

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
                isAuth: true
            }
        }

        default:
            return state;
    }

}

export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
});

export const getAuthUserData = () => {
    return (dispatch) => {
        authApi.setAuth().then((data) => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data;
                dispatch(setAuthUserData(id, email, login, true));
            }
        });
    }
}

export const login = (email, password, rememberMe) => {
    return (dispatch) => {
        authApi.login(email, password, rememberMe).then((data) => {
            if (data.resultCode === 0) {
                dispatch(getAuthUserData());
            }
        });
    }
}

export const logout = () => {
    return (dispatch) => {
        authApi.logout().then((data) => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        });
    }
}

export default authReducer;