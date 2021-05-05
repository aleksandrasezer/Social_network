export type StoreType = {
    _state: StateType
     renderTree: () => void
    subscriber: (observer: () => void) => void
    getState: () => StateType
    dispatch: (action: ActionTypes) => void
}

export type ActionTypes = ReturnType<typeof addPostAC> | ReturnType<typeof updateNewPostTextAC>
export type StateType = {
    profilePage: {posts: PostType[], newPostText: string}
    dialogsPage: {
        messages: MessageType[]
        dialogs: DialogType[]}
    }
export type PostType = {
    id: number
    postText: string
    likesCount: number
}
export type MessageType = {
    id: number
    messageText: string
}
export type DialogType = {
    id: number
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
            messages: [{id: 1, messageText: "Hi, how are you?"},
                {id: 2, messageText: "Summer is coming!"},
                {id: 3, messageText: "Yo"},
                {id: 4, messageText: "Yoyo"}],
            dialogs: [{id: 1, name: "Tatiana"},
                {id: 2, name: "Dasha"},
                {id: 3, name: "Victor"},
                {id: 4, name: "Ergun"},]
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
        }
    },
    renderTree() {console.log('state changed')},
    subscriber(observer) {
        this.renderTree = observer
    },
    getState() {return this._state}
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