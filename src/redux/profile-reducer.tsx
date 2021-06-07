import {v1} from "uuid";

const REMOVE_POST = 'REMOVE_POST'
const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const SET_USERS_PROFILE = 'SET_PROFILE'

type ActionTypes = ReturnType<typeof addPostAC> | ReturnType<typeof updateNewPostTextAC> |
    ReturnType<typeof removePostAC> | ReturnType<typeof setUsersProfile>

let initialState = {
    posts: [
        {id: v1(), postText: "Hello there", likesCount: 8},
        {id: v1(), postText: "It's cold in here", likesCount: 12},
        {id: v1(), postText: "I miss my mom", likesCount: 35},
    ],
    newPostText: 'write something..',
    profile: null,
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
        ADD_POST:
            return {
                ...state,
                posts: [{id: v1(), postText: state.newPostText, likesCount: 0}, ...state.posts],
                newPostText: ''
            }
        case
        UPDATE_NEW_POST_TEXT:
            return {...state, newPostText: action.newText}
        case
        SET_USERS_PROFILE:
            return {...state, profile: action.profile}
        default:
            return {...state}
    }
}
export const addPostAC = () => {
    return {type: ADD_POST} as const
}
export const updateNewPostTextAC = (text: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    } as const
}
export const removePostAC = (id: string) => {
    return {
        type: REMOVE_POST,
        id: id
    } as const
}
export const setUsersProfile = (profile: any) => {
    return {
        type: SET_USERS_PROFILE,
        profile
    } as const
}