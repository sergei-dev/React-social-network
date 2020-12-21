import {
    usersApi
} from '../api/api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    users: [

    ],
    pageSize: 4,
    totalCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {
                            ...user,
                            followed: true
                        };
                    }
                    return user;
                })
            }
        }

        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {
                            ...user,
                            followed: false
                        };
                    }
                    return user;
                })
            }
        }

        case SET_USERS: {
            return {
                ...state,
                users: [...action.users]
            }
        }

        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }

        case SET_USERS_TOTAL_COUNT: {
            return {
                ...state,
                totalCount: action.totalCount
            }
        }

        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }

        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching ? [...state.followingInProgress, action.userId] : [state.followingInProgress.filter(id => id !== action.userId)]
            }
        }

        default:
            return state
    }
}

export const followSucces = (userId) => ({
    type: FOLLOW,
    userId: userId
})

export const unFollowSucces = (userId) => ({
    type: UNFOLLOW,
    userId: userId
})

export const setUsers = (users) => ({
    type: SET_USERS,
    users: users
})

export const setCurrentPage = (currentPage) => ({
    type: SET_CURRENT_PAGE,
    currentPage: currentPage
})

export const setUsersTotalCount = (totalCount) => ({
    type: SET_USERS_TOTAL_COUNT,
    totalCount: totalCount
})

export const toggleIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching: isFetching
})

export const toggleIsFollowingProgress = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching: isFetching,
    userId: userId
})

export const requestUsers = (page, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(page));

        const data = await usersApi.getUsers(page, pageSize);

        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setUsersTotalCount(data.totalCount));
    }
}

export const follow = (userId) => {
    return async (dispatch) => {
        dispatch(toggleIsFollowingProgress(true, userId));

        const data = await usersApi.followSucces(userId);

        if (data.resultCode === 0) {
            dispatch(followSucces(userId));
        }
        dispatch(toggleIsFollowingProgress(false, userId));
    }
}

export const unFollow = (userId) => {
    return async (dispatch) => {
        dispatch(toggleIsFollowingProgress(true, userId));

        const data = await usersApi.unFollowSucces(userId);

        if (data.resultCode === 0) {
            dispatch(unFollowSucces(userId));
        }
        dispatch(toggleIsFollowingProgress(false, userId));
    }
}

export default usersReducer;