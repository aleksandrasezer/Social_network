import {v1} from "uuid";
import {PostType} from "./store";

type ProfilePageType = { posts: PostType[], newPostText: string }

type ActionTypes = ReturnType<typeof addPostAC> |
    ReturnType<typeof updateNewPostTextAC> |
    ReturnType<typeof removePostAC>

let initialState = {
    posts: [
        {id: v1(), postText: "Hello there", likesCount: 8},
        {id: v1(), postText: "It's cold in here", likesCount: 12},
        {id: v1(), postText: "I miss my mom", likesCount: 35},
    ],
    newPostText: 'write something..'
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionTypes) => {
    switch (action.type) {
        case 'REMOVE-POST':
            return {...state,posts: [...state.posts].filter(p => p.id !== action.id)}
        case 'ADD-POST':
            return {
                ...state,
                posts: [{id: v1(), postText: state.newPostText, likesCount: 0},...state.posts],
                newPostText: ''
            }
        case 'UPDATE-NEW-POST-TEXT':
            return {...state,newPostText: action.newText}
        default: return {...state}
    }
}
export const addPostAC = () => {
    return {type: 'ADD-POST'} as const
}
export const updateNewPostTextAC = (text: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: text
    } as const
}
export const removePostAC = (id: string) => {
    return {
        type: 'REMOVE-POST',
        id: id
    } as const
}