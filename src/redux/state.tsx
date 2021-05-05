import {v1} from "uuid";

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
        if (action.type === 'ADD-POST') {
            let newPost: PostType = {
                id: 5,
                postText: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this.renderTree()
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText
            console.log('post is changing..')
            this.renderTree()
        } else if (action.type === 'UPDATE-NEW-MESSAGE-BODY') {
            this._state.dialogsPage.newMessageBody = action.newMessageText
            console.log('message is changing..')
            this.renderTree()
        } else if (action.type === 'ADD-MESSAGE') {
            const newMessage: MessageType = {
                id: v1(),
                messageText: this._state.dialogsPage.newMessageBody
            }
            this._state.dialogsPage.messages.push(newMessage)
            this._state.dialogsPage.newMessageBody = ''
            this.renderTree()
        }
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

export const addPostAC = () => {
    return {type: 'ADD-POST'} as const
}
export const addMessageAC = () => {
    return {type: 'ADD-MESSAGE'} as const
}
export const updateNewPostTextAC = (text: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: text
    } as const
}
export const updateNewMessageBodyAC = (text: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-BODY',
        newMessageText: text
    } as const
}