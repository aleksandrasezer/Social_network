import React, {ChangeEvent} from "react";
import s from "./Messages.module.css";
import Message from "./Message";
import {
    ActionTypes,
    addMessageAC,
    MessageType,
    updateNewMessageBodyAC
} from "../../../redux/state";
import {ControlledTextarea} from "../../ControlledTextarea/ControlledTextarea";

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
                    <button onClick={addNewMessage}> Send
                    </button>
                </div>
            </div>
        </div>
    )

}

export default Messages;