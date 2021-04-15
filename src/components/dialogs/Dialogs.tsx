import React from "react";
import s from "./Dialogs.module.css"
import Messages from "./messages/Messages";
import Dialog from "./Dialog/Dialog";
import {dialogsType, messagesType} from "../../redux/state";

type DialogsPropsType = {
    messages: messagesType
    dialogs: dialogsType
}
function Dialogs(props: DialogsPropsType) {
    let dialogsItems = props.dialogs.map((el) => <Dialog id={el.id} name={el.name} />)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsItems }
            </div>
            <div className={s.messages}>
                <Messages messages={props.messages}/>
            </div>
        </div>
    )
}

export default Dialogs;