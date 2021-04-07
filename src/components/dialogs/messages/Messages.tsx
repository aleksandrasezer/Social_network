import React from "react";
import s from "./Messages.module.css"

function Messages() {
    return (
        <div className={s.messages}>
            <div className={s.message}>
                Hello
            </div>
            <div className={s.message}>
                How are you
            </div>
            <div className={s.message}>
                Are you here
            </div>
        </div>
    )
}

export default Messages;