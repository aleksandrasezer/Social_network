export type StoreType = {
    _state: StateType
    updateNewPostText: (newText: string) => void
    addPost: () => void
    renderTree: () => void
    subscriber: (observer: () => void) => void
    getState: () => StateType
}
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
    updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText
        console.log('post is changing..')
        this.renderTree()
    },
    addPost() {
        let newPost: PostType = {
            id: 5,
            postText: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this.renderTree()
    },
    renderTree() {console.log('state changed')},
    subscriber(observer) {
        this.renderTree = observer
    },
    getState() {return this._state}
}