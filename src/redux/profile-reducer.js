import {
    profileApi
} from '../api/api';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
const DELETE_POST = 'DELETE_POST';

let initialState = {
    postsData: [{
            id: '1',
            text: 'hello my hello',
            like: '5',
        },
        {
            id: '2',
            text: 'good post',
            like: '0',
        },
        {
            id: '3',
            text: 'yo',
            like: '9',
        },
        {
            id: '4',
            text: 'yo Boruto',
            like: '20',
        },
        {
            id: '5',
            text: 'yo',
            like: '3',
        },
        {
            id: '6',
            text: 'yo hero',
            like: '90',
        },
        {
            id: '7',
            text: 'how are you',
            like: '100',
        }
    ],
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            const newPost = {
                id: 0,
                text: action.postMessage,
                like: 0,
            }

            return {
                ...state,
                postsData: [...state.postsData, newPost]
            };
        }

        case DELETE_POST: {
            return {
                ...state,
                postsData: [...state.postsData.filter(post => post != action.postId)]
            }
        }

        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }

        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }

        default:
            return state;
    }

}

export const addPostActionCreator = (postMessage) => ({
    type: ADD_POST,
    postMessage: postMessage
});

export const deletePostActionCreator = (postId) => ({
    type: DELETE_POST,
    postId: postId
})

export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile: profile
});

export const setStatus = (status) => ({
    type: SET_STATUS,
    status: status
})

export const setProfile = (userId) => {
    return async (dispatch) => {
        const response = await profileApi.getProfile(userId);
        dispatch(setUserProfile(response));
    }
}

export const getStatus = (userId) => {
    return async (dispatch) => {
        const response = await profileApi.getProfileStatus(userId);
        dispatch(setStatus(response));
    }
}

export const updateStatus = (status) => {
    return async (dispatch) => {
        const response = await profileApi.updateStatus(status);
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    }
}

export default profileReducer;