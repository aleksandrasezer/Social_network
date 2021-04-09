import React from "react";
import s from "./Message.module.css"

type MessagePropsType = {
    id: number
    message: string
}

function Message(props: MessagePropsType) {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}

export default Message;