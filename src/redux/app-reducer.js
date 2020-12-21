import { getAuthUserData } from './auth-reducer';

const INITIALISED_SUCCESS = 'INITIALISED_SUCCESS';

let initialState = {
    initialised: false,
}

const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case INITIALISED_SUCCESS: {
            return {
                ...state,
                initialised: true,
            }
        }

        default:
            return state;
    }

}

const initialisedSuccess = () => ({
    type: INITIALISED_SUCCESS
})

export const initialiseApp = () => {
    return (dispatch) => {
        const promise = dispatch(getAuthUserData());
        promise.then(() => {
            dispatch(initialisedSuccess());
        })
    }
}

export default appReducer;