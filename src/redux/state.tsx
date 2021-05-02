let renderTree = () => {}
export const subscriber = (observer: () => void) => {
    renderTree = observer
}

export type stateType = {
    profilePage: {posts: postsType, newPostText: string}
    dialogsPage: {
        messages: messagesType
        dialogs: dialogsType}
    }
export type postsType = Array<postType>
export type postType = {
    id: number
    postText: string
    likesCount: number
}
export type messagesType = Array<messageType>
type messageType = {
    id: number
    messageText: string
}
export type dialogsType = Array<dialogType>
type dialogType = {
    id: number
    name: string
}

let state: stateType = {
    profilePage: {
        posts: [
            {id: 1, postText: "Hello there", likesCount: 8
            },
            {id: 2, postText: "It's cold in here", likesCount: 12
            },
            {id: 3, postText: "I miss my mom", likesCount: 35
            },
        ],
        newPostText: 'write something..'},
    dialogsPage: {
        messages: [{id: 1, messageText: "Hi, how are you?"},
            {id: 2, messageText: "Summer is coming!"},
            {id: 3, messageText: "Yo"},
            {id: 4, messageText: "Yoyo"}],
        dialogs: [{id: 1, name: "Tatiana"},
            {id: 2, name: "Dasha"},
            {id: 3, name: "Victor"},
            {id: 4, name: "Ergun"},]}

}

export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText
    console.log('post is changing..')
    renderTree()
}
export const addPost = () => {
    let newPost: postType = {
        id: 5,
        postText: state.profilePage.newPostText,
        likesCount: 0}
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    renderTree()
}


export default state;