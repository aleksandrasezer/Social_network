import {v1} from "uuid";
import {profileAPI} from "../dal/api";
import {PostType, ProfileType} from "../types/types";
import {AppThunk} from "./redux-store";

export type ProfileActionsType = ReturnType<typeof deletePostAC>
    | ReturnType<typeof setUsersProfile>
    | ReturnType<typeof setUsersStatus>
    | ReturnType<typeof addPostAC>

let initialState = {
    posts: [
        {id: v1(), postText: "Hello there", likesCount: 8},
        {id: v1(), postText: "It's cold in here", likesCount: 12},
        {id: v1(), postText: "I miss my mom", likesCount: 35},
    ],
    newPostText: 'write something..',
    profile: null as ProfileType | null,
    userStatus: '',
}

type InitialStateType = typeof initialState

export const profileReducer = (state: InitialStateType = initialState, action: ProfileActionsType): InitialStateType => {
    switch (action.type) {
        case 'PROFILE/DELETE-POST':
            return {
                ...state,
                posts: [...state.posts].filter(p => p.id !== action.id)
            }
        case 'PROFILE/SET-PROFILE':
            return {...state, profile: action.profile}
        case 'PROFILE/SET-USERS-STATUS':
            return {...state, userStatus: action.status}
        case 'PROFILE/ADD-POST':
            const newPost: PostType = {
                id: v1(),
                postText: action.newPostText,
                likesCount: 1
            }
            return {...state,
                posts: [newPost,...state.posts]
            }
        default:
            return {...state}
    }
}

//action-creators

export const deletePostAC = (id: string) => ({type: 'PROFILE/DELETE-POST', id} as const)
export const addPostAC = (newPostText: string) => ({type: 'PROFILE/ADD-POST', newPostText} as const)
const setUsersProfile = (profile: ProfileType | null) => ({type: 'PROFILE/SET-PROFILE', profile} as const)
const setUsersStatus = (status: string) => ({type: 'PROFILE/SET-USERS-STATUS', status} as const)

//thunk-creators
export const setUserProfileInfo = (userId: string): AppThunk => async (dispatch) => {
    const userData = await profileAPI.getUserProfile(userId)
    dispatch(setUsersProfile(userData))
}
export const setUserStatus = (userId: string): AppThunk => async (dispatch) => {
    const response = await profileAPI.getUserStatus(userId)
    if (response.status === 200) {
        dispatch(setUsersStatus(response.data))
    }
}
export const setMyStatus = (newStatus: string): AppThunk => async (dispatch) => {
    const response = await profileAPI.setMyStatus(newStatus)
    if (response.status === 200) {
        dispatch(setUsersStatus(newStatus))
    }
}

