import React from "react";
import s from "./Messages.module.css";
import Message from "./message/Message";
import {MessageType} from "../../../types/types";
import MessageForm, {FormDataType} from "./message/newMessage/NewMessage";

type MessagesPropsType = {
    messages: MessageType[]
    newMessageText: string
}

function Messages(props: MessagesPropsType) {

        let messagesItems = props.messages.map((el) => <Message key={el.id} id={el.id} message={el.messageText}/>)
    console.log(props.messages)

    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }

    return (
        <div className={s.messagesContainer}>
            <div className={s.messages}>
                {messagesItems}
            </div>

            <MessageForm onSubmit={onSubmit} />

        </div>
    )

}


export default Messages;