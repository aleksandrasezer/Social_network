import {v1} from "uuid";
import {profileAPI} from "../dal/api";
import {ProfileType} from "../types/types";
import {AppThunk} from "./redux-store";

const REMOVE_POST = 'REMOVE_POST'
const SET_USERS_PROFILE = 'SET_PROFILE'
const SET_USERS_STATUS = 'SET_USERS_STATUS'

export type ProfileActionsType = ReturnType<typeof removePostAC> | ReturnType<typeof setUsersProfile> |
    ReturnType<typeof setUsersStatus>

let initialState = {
    posts: [
        {id: v1(), postText: "Hello there", likesCount: 8},
        {id: v1(), postText: "It's cold in here", likesCount: 12},
        {id: v1(), postText: "I miss my mom", likesCount: 35},
    ],
    newPostText: 'write something..',
    profile: null as ProfileType | null,
    userStatus: ''
}

type InitialStateType = typeof initialState

export const profileReducer = (state: InitialStateType = initialState, action: ProfileActionsType): InitialStateType => {
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

export const removePostAC = (id: string) => ({type: REMOVE_POST, id} as const)

const setUsersProfile = (profile: ProfileType | null) => ({type: SET_USERS_PROFILE, profile} as const)

const setUsersStatus = (status: string) => ({type: SET_USERS_STATUS, status} as const)

//thunk-creators

export const setUserProfileInfo = (userId: string): AppThunk => (dispatch) => {
    return profileAPI.getUserProfile(userId).then(data => {
        dispatch(setUsersProfile(data))
    })

}

export const setUserStatus = (userId: string): AppThunk => (dispatch) => {
    return profileAPI.getUserStatus(userId).then((response) => {
        if (response.status === 200) {
            dispatch(setUsersStatus(response.data))
        }
    })
}

export const setMyStatus = (newStatus: string): AppThunk => (dispatch) => {
    return profileAPI.setMyStatus(newStatus).then((response) => {
        if (response.status === 200) {
            dispatch(setUsersStatus(newStatus))
        }
    })
}
