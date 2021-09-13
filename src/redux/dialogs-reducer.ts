import {v1} from "uuid";
import {DialogType, MessageType} from "../types/types";

type DialogsPageType = {
    messages: MessageType[]
    dialogs: DialogType[]
    newMessageBody: string
}

export type DialogsActionsType = ReturnType<typeof addMessageAC>

let initialState = {
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

export const dialogsReducer = (state: DialogsPageType = initialState, action: DialogsActionsType): DialogsPageType => {
    switch (action.type) {
        case 'DIALOGS/ADD-MESSAGE':
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
    return {type: 'DIALOGS/ADD-MESSAGE'} as const
}
