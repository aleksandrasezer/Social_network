import {ActionTypes, PostType} from "./store";

type ProfilePageType = { posts: PostType[], newPostText: string }

export const profileReducer = (state: ProfilePageType, action: ActionTypes) => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost: PostType = {
                id: 5,
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