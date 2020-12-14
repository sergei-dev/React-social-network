import * as axios from "axios";

const baseUrl = 'https://social-network.samuraijs.com/api/1.0/';

const instance = axios.create({
    headers: {
        'API-KEY': '80ca9351-5455-4200-872b-ab53700a85cc'
    },
    withCredentials: true,
    baseURL: baseUrl
})

export const usersApi = ({
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    unFollowSucces(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data);
    },
    followSucces(userId) {
        return instance.post(`follow/${userId}`)
            .then(response => response.data);
    }
})

export const profileApi = ({
    getProfile(userId = 2) {
        return instance.get(`profile/${userId}`)
            .then(response => response.data);
    },
    getProfileStatus(userId = 2) {
        return instance.get(`profile/status/${userId}`)
            .then(response => response.data);
    },
    updateStatus(status) {
        return instance.put(`profile/status/`, {
            status: status
        });
    }
})

export const authApi = ({
    setAuth() {
        return instance.get(`auth/me`)
            .then(response => response.data);
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {
            email, password, rememberMe
        });
    },
    logout() {
        return instance.delete(`auth/login`);
    }
})