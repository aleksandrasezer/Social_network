import React from "react";
import s from "./Messages.module.css";
import Message from "./Message";
import {MessageType} from "../../../redux/state";

type MessagesPropsType = {
    messages: MessageType[]
}

function Messages(props: MessagesPropsType) {
    let messagesItems = props.messages.map((el) => <Message id={el.id} message={el.messageText} />)
    console.log(props.messages)
    return (
        <div className={s.messages}>
            {messagesItems}
        </div>
    )
}

export default Messages;