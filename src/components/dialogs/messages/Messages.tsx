import React, {ChangeEvent} from "react";
import s from "./Messages.module.css";
import Message from "./Message";
import {
    ActionTypes,
    addMessageAC,
    MessageType,
    updateNewMessageBodyAC
} from "../../../redux/state";

type MessagesPropsType = {
    messages: MessageType[]
    dispatch: (action: ActionTypes) => void
}


function Messages(props: MessagesPropsType) {

    const addNewMessage = () => props.dispatch(addMessageAC())

    const onMessageChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        if (e.currentTarget) {
            let text = e.currentTarget.value
            props.dispatch(updateNewMessageBodyAC(text))
        }
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
                        <textarea onChange={onMessageChangeHandler}
                                  onClick={onTextClickHandler}/>
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