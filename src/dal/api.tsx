import axios from "axios";

const instance = axios.create(
    {
        withCredentials: true,
        baseURL: "https://social-network.samuraijs.com/api/1.0/",
        headers: {
            "API-KEY": "fd7ee122-ff59-4cee-b5b0-6226ee5b433c",
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
    getUsers(currentPage: number, pageSize: number) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data)
    },
}

export const authAPI = {
    getAuthUserData() {
        return instance.get(`auth/me`).then(response => response.data)
    },
}

export const followAPI = {
    followUser(userId: number) {
        return instance.post(`follow/${userId}`).then(response => response.data)

    },
    unfollowUser(userId: number) {
        return instance.delete(`follow/${userId}`).then(response => response.data)

    },
}
