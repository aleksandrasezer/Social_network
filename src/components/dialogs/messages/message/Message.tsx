import React from "react";
import s from "./Message.module.css"

export const Message = (props: MessagePropsType) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}

//types
type MessagePropsType = {
    id: string
    message: string
}

