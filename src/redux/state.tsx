import {v1} from "uuid";
import {addMessageAC, dialogsReducer, updateNewMessageBodyAC} from "./dialogs-reducer";
import {addPostAC, profileReducer, updateNewPostTextAC} from "./profile-reducer";

export type StoreType = {
    _state: StateType
    renderTree: () => void
    subscriber: (observer: () => void) => void
    getState: () => StateType
    dispatch: (action: ActionTypes) => void
}

export type ActionTypes = ReturnType<typeof addPostAC> |
    ReturnType<typeof updateNewPostTextAC> |
    ReturnType<typeof updateNewMessageBodyAC> |
    ReturnType<typeof addMessageAC>
export type StateType = {
    profilePage: { posts: PostType[], newPostText: string }
    dialogsPage: {
        messages: MessageType[]
        dialogs: DialogType[]
        newMessageBody: string
    }
}
export type PostType = {
    id: number
    postText: string
    likesCount: number
}
export type MessageType = {
    id: string
    messageText: string
}
export type DialogType = {
    id: string
    name: string
}


export const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {
                    id: 1, postText: "Hello there", likesCount: 8
                },
                {
                    id: 2, postText: "It's cold in here", likesCount: 12
                },
                {
                    id: 3, postText: "I miss my mom", likesCount: 35
                },
            ],
            newPostText: 'write something..'
        },
        dialogsPage: {
            messages: [{id: v1(), messageText: "Hi, how are you?"},
                {id: v1(), messageText: "Summer is coming!"},
                {id: v1(), messageText: "Yo"},
                {id: v1(), messageText: "Yoyo"}],
            dialogs: [{id: v1(), name: "Tatiana"},
                {id: v1(), name: "Dasha"},
                {id: v1(), name: "Victor"},
                {id: v1(), name: "Ergun"},],
            newMessageBody: 'write something:)'
        }
    },
    dispatch(action) {
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage,action)
        this._state.profilePage = profileReducer(this._state.profilePage,action)
        this.renderTree()
    },
    renderTree() {
        console.log('state changed')
    },
    subscriber(observer) {
        this.renderTree = observer
    },
    getState() {
        return this._state
    }
}
