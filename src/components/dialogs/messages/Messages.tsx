import React from "react";
import s from "./Messages.module.css";
import Message from "./Message";
import {ActionTypes, MessageType} from "../../../redux/store";
import {ControlledTextarea} from "../../ControlledTextarea/ControlledTextarea";
import {addMessageAC, updateNewMessageBodyAC} from "../../../redux/dialogs-reducer";
import {Button} from "../../Button/Button";

type MessagesPropsType = {
    messages: MessageType[]
    dispatch: (action: ActionTypes) => void
    newMessageBody: string
}


function Messages(props: MessagesPropsType) {

    const addNewMessage = () => props.dispatch(addMessageAC())

    const onMessageChangeHandler = (text: string) => {
            props.dispatch(updateNewMessageBodyAC(text))
    }

    let onTextClickHandler = () => props.dispatch(updateNewMessageBodyAC(''))

    let messagesItems = props.messages.map((el) => <Message id={el.id} message={el.messageText}/>)
    console.log(props.messages)

    return (
        <div>
            <div className={s.messages}>
                {messagesItems}
            </div>
            <div>
                <div>
                    <ControlledTextarea onPostChange={onMessageChangeHandler}
                                        value={props.newMessageBody}
                                        onTextClick={onTextClickHandler} />

                </div>
                <div>
                    <Button onClick={addNewMessage}> Send
                    </Button>
                </div>
            </div>
        </div>
    )

}

export default Messages;