import React from "react";
import s from "./Messages.module.css";
import Message from "./message/Message";
import {MessageType} from "../../../types/types";
import MessageForm, {MessageFormDataType} from "./message/newMessage/NewMessage";

type MessagesPropsType = {
    messages: MessageType[]
    newMessageText: string
    addMessage: (message: string) => void
}

function Messages(props: MessagesPropsType) {

        let messagesItems = props.messages.map((el) => <Message key={el.id} id={el.id} message={el.messageText}/>)
    console.log(props.messages)

    const onAddMessage = (formData: MessageFormDataType) => {

        props.addMessage(formData.message)
    }

    return (
        <div className={s.messagesContainer}>
            <div className={s.messages}>
                {messagesItems}
            </div>

            <MessageForm onSubmit={onAddMessage} />

        </div>
    )

}


export default Messages;