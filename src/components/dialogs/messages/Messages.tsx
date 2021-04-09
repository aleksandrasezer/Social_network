import React from "react";
import s from "./Messages.module.css"
import Message from "./Message/Message";

function Messages() {
    return (
        <div className={s.messages}>
            <Message id={1} message="Hello" />
            <Message id={2} message="What's up" />
            <Message id={3} message="You here?" />
        </div>
    )
}

export default Messages;