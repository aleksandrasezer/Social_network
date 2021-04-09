import React from "react";
import s from "./Dialogs.module.css"
import Messages from "./messages/Messages";
import Dialog from "./Dialog/Dialog";

function Dialogs() {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <Dialog id={1} name="Tatiana"/>
                <Dialog id={2} name="Dasha"/>
                <Dialog id={3} name="Victor"/>
                <Dialog id={4} name="Ergun"/>
            </div>
            <div className={s.messages}>
                <Messages/>
            </div>
        </div>
    )
}

export default Dialogs;