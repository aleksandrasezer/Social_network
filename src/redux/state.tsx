export type stateType = {
    posts: postsType
    messages: messagesType
    dialogs: dialogsType
}
export type postsType = Array<postType>
type postType = {
    id: number
    postText: string
    avatar: string
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

let state = {
    posts: [
        {id: 1, postText: "Hello there", avatar: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/10/10a06adc92c1746b48b842c031199d692b1ba623_full.jpg"
        },
        {id: 2, postText: "It's cold in here", avatar: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/10/10a06adc92c1746b48b842c031199d692b1ba623_full.jpg"
        },
        {id: 3, postText: "I miss my mom", avatar: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/10/10a06adc92c1746b48b842c031199d692b1ba623_full.jpg"
        },
    ],
    messages: [{id: 1, messageText: "Hi, how are you?"},
        {id: 2, messageText: "Summer is coming!"},
        {id: 3, messageText: "Yo"},
        {id: 4, messageText: "Yoyo"}],
    dialogs: [{id: 1, name: "Tatiana"},
        {id: 2, name: "Dasha"},
        {id: 3, name: "Victor"},
        {id: 4, name: "Ergun"},]
}

export default state;