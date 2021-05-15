import React from "react";
import Dialogs from "./Dialogs";
import {addMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import {StoreType} from "../../redux/redux-store";

type DialogsContainerPropsType = {
    store: StoreType
}
export function DialogsContainer(props: DialogsContainerPropsType) {
    // @ts-ignore
    let dialogs = props.store.getState().dialogsPage.dialogs
    let messages = props.store.getState().dialogsPage.messages
    let newMessageText = props.store.getState().dialogsPage.newMessageBody

    const addNewMessage = () => props.store.dispatch(addMessageAC())

    const onMessageChangeHandler = (text: string) => props.store.dispatch(updateNewMessageBodyAC(text))

    const onTextClickHandler = () => props.store.dispatch(updateNewMessageBodyAC(''))


    return <Dialogs messages={messages}
                    dialogs={dialogs}
                    newMessageText={newMessageText}
                    addNewMessage={addNewMessage}
                    onMessageChangeHandler={onMessageChangeHandler}
                    onTextClickHandler={onTextClickHandler}/>
}
