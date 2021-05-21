import {v1} from "uuid";
import {DialogType, MessageType} from "./store";

type DialogsPageType = {
    messages: MessageType[]
    dialogs: DialogType[]
    newMessageBody: string
}

type ActionTypes = ReturnType<typeof updateNewMessageBodyAC> | ReturnType<typeof addMessageAC>

let initialStore = {
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

export const dialogsReducer = (state: DialogsPageType = initialStore, action: ActionTypes) => {
    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-BODY':
            return {...state, newMessageBody: action.newMessageText}
        case 'ADD-MESSAGE':
            return {
                ...state,
                messages: [...state.messages, {id: v1(), messageText: state.newMessageBody}],
                newMessageBody: ''
            }
        default:
            return {...state}
    }
}

export const addMessageAC = () => {
    return {type: 'ADD-MESSAGE'} as const
}

export const updateNewMessageBodyAC = (text: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-BODY',
        newMessageText: text
    } as const
}