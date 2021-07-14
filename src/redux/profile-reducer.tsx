import {v1} from "uuid";
import {Dispatch} from "redux";
import {profileAPI} from "../dal/api";

const REMOVE_POST = 'REMOVE_POST'
const SET_USERS_PROFILE = 'SET_PROFILE'
const SET_USERS_STATUS = 'SET_USERS_STATUS'

type ActionTypes = ReturnType<typeof removePostAC> | ReturnType<typeof setUsersProfile> |
    ReturnType<typeof setUsersStatus>

let initialState = {
    posts: [
        {id: v1(), postText: "Hello there", likesCount: 8},
        {id: v1(), postText: "It's cold in here", likesCount: 12},
        {id: v1(), postText: "I miss my mom", likesCount: 35},
    ],
    newPostText: 'write something..',
    profile: null,
    userStatus: ''
}

export type ProfileType = {
    aboutMe: string
    contacts:
        {
            github: string
            vk: string
            facebook: string
            instagram: string
            twitter: string
            website: string
            youtube: string
            mainLink: string
        }
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    photos: { small: string, large: string }
    userId: number
} | null

type InitialStateType = typeof initialState

export const profileReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case REMOVE_POST:
            return {
                ...state, posts: [...state.posts].filter(p => p.id !== action.id)
            }
        case
        SET_USERS_PROFILE:
            return {...state, profile: action.profile}
        case
        SET_USERS_STATUS:
            return {...state, userStatus: action.status}
        default:
            return {...state}
    }
}

//action-creators

export const removePostAC = (id: string) => {
    return {
        type: REMOVE_POST,
        id: id
    } as const
}
const setUsersProfile = (profile: any) => {
    return {
        type: SET_USERS_PROFILE,
        profile
    } as const
}
const setUsersStatus = (status: string) => {
    return {
        type: SET_USERS_STATUS,
        status
    } as const
}

//thunk-creators

export const setUserProfileInfo = (userId: string) => (dispatch: Dispatch) => {
    return profileAPI.getUserProfile(userId).then(data => {
        dispatch(setUsersProfile(data))
    })

}

export const setUserStatus = (userId: string) => (dispatch: Dispatch) => {
    return profileAPI.getUserStatus(userId).then((response) => {
        if (response.status === 200) {
            dispatch(setUsersStatus(response.data))
        }
    })
}

export const setMyStatus = (newStatus: string) => (dispatch: Dispatch) => {
    return profileAPI.setMyStatus(newStatus).then((response) => {
        if (response.status === 200) {
            dispatch(setUsersStatus(newStatus))
        }
    })
}
