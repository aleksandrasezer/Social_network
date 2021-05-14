import {ActionTypes, PostType} from "./store";
import {v1} from "uuid";

type ProfilePageType = { posts: PostType[], newPostText: string }

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
            state.posts = state.posts.filter(p => p.id !== action.id)
            console.log('removing post..')
            return state
        case 'ADD-POST':
            let newPost: PostType = {
                id: v1(),
                postText: state.newPostText,
                likesCount: 0
            }
            state.posts.unshift(newPost)
            state.newPostText = ''
            return state
        case 'UPDATE-NEW-POST-TEXT':
            state.newPostText = action.newText
            console.log('post is changing..')
            return state
        default: return state
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