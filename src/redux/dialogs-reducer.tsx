import {ActionTypes, DialogType, MessageType} from "./state";
import {v1} from "uuid";

type DialogsPageType = {
    messages: MessageType[]
    dialogs: DialogType[]
    newMessageBody: string
}

export const dialogsReducer = (state: DialogsPageType, action: ActionTypes) => {
    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-BODY':
            state.newMessageBody = action.newMessageText
            console.log('message is changing..')
            return state
        case 'ADD-MESSAGE':
            const newMessage: MessageType = {
                id: v1(),
                messageText: state.newMessageBody
            }
            state.messages.push(newMessage)
            state.newMessageBody = ''
            return state
        default:
            return state
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