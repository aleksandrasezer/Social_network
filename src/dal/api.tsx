import axios from "axios";

const instance = axios.create(
    {
        withCredentials: true,
        baseURL: "https://social-network.samuraijs.com/api/1.0/",
        headers: {
            "API-KEY": "4f348a4d-b27b-44e2-b016-551b13e8fd56",
        }
    })



export const profileAPI = {
    getUserProfile(userId: string) {
        return instance.get(`profile/${userId}`)
            .then(response => response.data)
    },
    getUserStatus(userId: string) {
        return instance.get(`/profile/status/${userId}`)
    },
    setMyStatus(newStatus: string) {

        return instance.put('profile/status', {status: newStatus})
    },
}

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number, nameSearch?: string) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}&term=${nameSearch}`)
        .then(response => response.data)
    },
}

export const authAPI = {
    getAuthUserData() {
        return instance.get(`auth/me`).then(response => response.data)
    },
    login(email: string, password: string, rememberMe: boolean) {
        return instance.post('auth/login', {email, password, rememberMe})
    },
    logout() {
        return instance.delete('auth/login')
    }
}

export const followAPI = {
    followUser(userId: number) {
        return instance.post(`follow/${userId}`).then(response => response.data)

    },
    unfollowUser(userId: number) {
        return instance.delete(`follow/${userId}`).then(response => response.data)

    },
}


